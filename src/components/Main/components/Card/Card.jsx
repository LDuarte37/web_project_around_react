import likeIcon from "../../../../images/likeBTN.svg";
import likeActiveIcon from "../../../../images/likeBTN_Active.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = card;

  const cardLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_active" : ""
  }`;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <button
        className="card__delete-btn"
        type="button"
        aria-label="Eliminar tarjeta"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <div className="card__info">
        <h3 className="card__name">{name}</h3>
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Me gusta"
          onClick={handleLikeClick}
        >
          <img
            src={isLiked ? likeActiveIcon : likeIcon}
            alt=""
            className="card__like-icon"
          />
        </button>{" "}
      </div>
    </li>
  );
}
