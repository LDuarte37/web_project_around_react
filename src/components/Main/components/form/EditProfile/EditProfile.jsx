export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-form" noValidate>
      <input
        type="text"
        className="popup__input"
        id="name-input"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
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
      />

      <span className="popup__input-error job-input-error"></span>

      <button
        type="submit"
        className="popup__button popup__button_disabled"
        disabled
      >
        Guardar
      </button>
    </form>
  );
}