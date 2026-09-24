export default function NewCard() {
  return (
    <form className="popup__form" id="add-card-form" noValidate>
      <input
        type="text"
        className="popup__input"
        id="card-name-input"
        name="name"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
      />

      <span className="popup__input-error card-name-input-error"></span>

      <input
        type="url"
        className="popup__input"
        id="card-link-input"
        name="link"
        placeholder="Enlace de la imagen"
        required
      />

      <span className="popup__input-error card-link-input-error"></span>

      <button
        type="submit"
        className="popup__button popup__button_disabled"
        disabled
      >
        Crear
      </button>
    </form>
  );
}