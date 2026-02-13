import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import trash from "../../../../images/Trash.svg";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (!card || !currentUser._id || !card.owner) return null;

  const isOwn =
    card.owner._id === currentUser._id || card.owner === currentUser._id;
  const likes = card.likes || [];
  const isLiked = likes.some((user) => user._id === currentUser._id);

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="memories__item">
      <div className="memories__image-wrapper">
        <img
          className="memories__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        {isOwn && (
          <div className="memories__overlay">
            <button
              className="memories__delete-button"
              type="button"
              onClick={handleDeleteClick}
              aria-label="Eliminar"
            >
              <img
                src={trash}
                alt="Eliminar"
                className="memories__delete-icon"
              />
            </button>
          </div>
        )}
      </div>
      <div className="memories__info">
        <h2 className="memories__title">{card.name}</h2>
        <button
          className={
            isLiked ? "memories__like memories__like_active" : "memories__like"
          }
          type="button"
          onClick={handleLikeClick}
          aria-label={isLiked ? "Quitar like" : "Dar like"}
        ></button>
      </div>
    </li>
  );
}

export default Card;
