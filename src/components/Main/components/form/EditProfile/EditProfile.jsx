import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <form
      className="popup__form"
      id="edit-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input"
        id="name-input"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameChange}
      />

      <span className="popup__input-error name-input-error"></span>

      <input
        type="text"
        className="popup__input"
        id="job-input"
        name="about"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleDescriptionChange}
      />

      <span className="popup__input-error job-input-error"></span>

      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
