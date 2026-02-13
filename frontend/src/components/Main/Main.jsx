import { useContext, useState } from "react";
import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/forms/EditProfile/EditProfile";
import EditAvatar from "./components/forms/EditAvatar/EditAvatar";
import NewCard from "./components/forms/NewCard/NewCard";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    onOpenPopup("image-popup");
  };

  const handleCloseImagePopup = () => {
    setSelectedCard(null);
    onClosePopup();
  };

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-wrapper"
            onClick={() => onOpenPopup("edit-avatar")}
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar || ""}
              alt={currentUser.name || "Avatar"}
            />
            <div className="profile__avatar-overlay">
              <button
                className="profile__avatar-edit-button"
                type="button"
                aria-label="Editar avatar"
              ></button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__title-row">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={() => onOpenPopup("edit-profile")}
                aria-label="Editar perfil"
              ></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={() => onOpenPopup("new-card")}
            aria-label="Agregar lugar"
          >
            +
          </button>
        </div>
      </section>

      <section className="memories">
        <ul className="memories__container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      <Popup
        name="edit-profile"
        isOpen={popup.isOpen && popup.name === "edit-profile"}
        onClose={onClosePopup}
        title="Editar perfil"
      >
        <EditProfile />
      </Popup>

      <Popup
        name="edit-avatar"
        isOpen={popup.isOpen && popup.name === "edit-avatar"}
        onClose={onClosePopup}
        title="Cambiar foto de perfil"
      >
        <EditAvatar />
      </Popup>

      <Popup
        name="new-card"
        isOpen={popup.isOpen && popup.name === "new-card"}
        onClose={onClosePopup}
        title="Nuevo lugar"
      >
        <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />
      </Popup>

      <ImagePopup
        isOpen={popup.isOpen && popup.name === "image-popup"}
        onClose={handleCloseImagePopup}
        card={selectedCard}
      />
    </main>
  );
}

export default Main;
