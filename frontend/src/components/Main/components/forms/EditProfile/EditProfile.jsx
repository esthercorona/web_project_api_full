import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        className="modal__input"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="about"
        placeholder="Acerca de mí"
        className="modal__input"
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="modal__save-button">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
