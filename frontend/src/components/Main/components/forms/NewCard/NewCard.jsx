import { useState } from "react";

function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({
      name,
      link,
    });
    setName("");
    setLink("");
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="place"
        placeholder="Nombre del lugar o recuerdo"
        className="modal__input"
        required
        minLength="2"
        maxLength="30"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        name="image"
        placeholder="URL de la imagen"
        className="modal__input"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit" className="modal__save-button">
        Guardar
      </button>
    </form>
  );
}

export default NewCard;
