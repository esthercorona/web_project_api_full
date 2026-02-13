function ImagePopup({ isOpen, onClose, card }) {
  if (!isOpen || !card) return null;

  return (
    <div className="modal modal_opened" onClick={onClose}>
      <div 
        className="modal__content modal__content--image" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal__close-button" 
          aria-label="Cerrar imagen"
          onClick={onClose}
        ></button>
        <img 
          src={card.link} 
          alt={card.name} 
          className="modal__preview-image" 
        />
        <p className="modal__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
