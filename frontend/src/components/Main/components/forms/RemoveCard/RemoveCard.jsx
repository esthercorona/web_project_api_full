import Popup from "../Popup/Popup";

function RemoveCard({ isOpen, onClose, onConfirm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} popupName="remove-card">
      <form className="popup__form" onSubmit={handleSubmit}>
        <h2 className="popup__title">¿Estás seguro/a?</h2>
        <button className="popup__button" type="submit">
          Sí
        </button>
      </form>
    </Popup>
  );
}

export default RemoveCard;
