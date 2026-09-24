export default function EditAvatar() {
  return (
    <form
      className="popup__form popup__form_type_avatar"
      id="avatar-form"
      noValidate
    >
      <input
        type="url"
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
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