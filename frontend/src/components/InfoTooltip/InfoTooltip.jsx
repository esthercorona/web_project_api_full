function InfoTooltip({ isOpen, onClose, isSuccess }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal_opened" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <div className="modal__icon-container">
          <div
            className={`modal__icon ${
              isSuccess ? "modal__icon_success" : "modal__icon_error"
            }`}
          />
        </div>
        <h2 className="modal__title modal__title_center">
          {isSuccess
            ? "¡Correcto! Ya estás registrado."
            : "Uy, algo salió mal. Por favor, inténtalo de nuevo."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
