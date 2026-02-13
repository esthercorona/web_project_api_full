const Card = require("../models/card");

const getCards = (req, res, next) => {
  Card.find({})
    .populate(["owner", "likes"])
    .then((cards) => res.send(cards))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => card.populate(["owner", "likes"]))
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === "ValidationError") {
        const error = new Error("Invalid data provided");
        error.statusCode = 400;
        next(error);
      } else {
        next(err);
      }
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        const error = new Error("Card not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }

      if (card.owner.toString() !== req.user._id) {
        const error = new Error("You can only delete your own cards");
        error.statusCode = 403;
        return Promise.reject(error);
      }

      return Card.findByIdAndDelete(req.params.cardId).then(() =>
        res.send({ message: "Card deleted successfully" })
      );
    })
    .catch((err) => {
      if (err.name === "CastError") {
        const error = new Error("Invalid card ID");
        error.statusCode = 400;
        next(error);
      } else {
        next(err);
      }
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .populate(["owner", "likes"])
    .then((card) => {
      if (!card) {
        const error = new Error("Card not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        const error = new Error("Invalid card ID");
        error.statusCode = 400;
        next(error);
      } else {
        next(err);
      }
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .populate(["owner", "likes"])
    .then((card) => {
      if (!card) {
        const error = new Error("Card not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        const error = new Error("Invalid card ID");
        error.statusCode = 400;
        next(error);
      } else {
        next(err);
      }
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
