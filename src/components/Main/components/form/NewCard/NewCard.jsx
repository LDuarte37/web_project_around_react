import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlaceSubmit({
      name,
      link,
    });
  }

  return (
    <form
      className="popup__form"
      id="add-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input"
        id="card-name-input"
        name="name"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleNameChange}
      />

      <span className="popup__input-error card-name-input-error"></span>

      <input
        type="url"
        className="popup__input"
        id="card-link-input"
        name="link"
        placeholder="Enlace de la imagen"
        required
        value={link}
        onChange={handleLinkChange}
      />

      <span className="popup__input-error card-link-input-error"></span>

      <button type="submit" className="popup__button">
        Crear
      </button>
    </form>
  );
}