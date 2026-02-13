function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal_opened" onClick={onClose}>
      <div
        className={`modal__content ${!title ? "modal__content--image" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        {title && <h2 className="modal__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default Popup;
