import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <input
        ref={avatarRef}
        type="url"
        name="avatar"
        placeholder="Enlace a la imagen"
        className="modal__input"
        required
      />
      <button type="submit" className="modal__save-button">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
