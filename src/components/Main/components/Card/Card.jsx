import likeIcon from "../../../../images/likeBTN.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link } = card;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  return (
    <li className="card">
      <button
        className="card__delete-btn"
        type="button"
        aria-label="Eliminar tarjeta"
      ></button>

      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <div className="card__info">
        <h3 className="card__name">{name}</h3>

        <button className="card__like-btn" type="button" aria-label="Me gusta">
          <img src={likeIcon} alt="" className="card__like-icon" />
        </button>
      </div>
    </li>
  );
}
