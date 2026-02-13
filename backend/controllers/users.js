const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key";

const createUser = (req, res, next) => {
  const { name, about, avatar, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        about,
        avatar,
        email,
        password: hash,
      })
    )
    .then((user) => {
      const userObject = user.toObject();
      delete userObject.password;
      res.status(201).send(userObject);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        const error = new Error("Invalid data provided");
        error.statusCode = 400;
        next(error);
      } else if (err.code === 11000) {
        const error = new Error("Email already exists");
        error.statusCode = 409;
        next(error);
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        const error = new Error("Incorrect email or password");
        error.statusCode = 401;
        return Promise.reject(error);
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          const error = new Error("Incorrect email or password");
          error.statusCode = 401;
          return Promise.reject(error);
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
          expiresIn: "7d",
        });

        return res.send({ token });
      });
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        const error = new Error("Invalid user ID");
        error.statusCode = 400;
        next(error);
      } else {
        next(err);
      }
    });
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(user);
    })
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(user);
    })
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

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        return Promise.reject(error);
      }
      return res.send(user);
    })
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

module.exports = {
  createUser,
  login,
  getUsers,
  getUserById,
  getCurrentUser,
  updateProfile,
  updateAvatar,
};
