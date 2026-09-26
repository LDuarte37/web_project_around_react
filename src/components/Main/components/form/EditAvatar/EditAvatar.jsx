import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form popup__form_type_avatar"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        ref={avatarRef}
      />

      <span className="popup__input-error avatar-input-error"></span>

      <button
        type="submit"
        className="popup__button popup__button_type_avatar"
      >
        Guardar
      </button>
    </form>
  );
}