import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/edit.svg";
import addIcon from "../../images/add.svg";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/form/NewCard/NewCard.jsx";
import EditProfile from "./components/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/form/EditAvatar/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__details">
          <div className="profile__avatar">
            <img
              src={avatar}
              className="profile__avatar-image"
              alt="Foto de perfil"
            />

            <button
              type="button"
              className="profile__avatar-edit"
              aria-label="Cambiar foto de perfil"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            ></button>
          </div>

          <div className="profile__text">
            <div className="profile__name-wrapper">
              <h3 className="profile__name">Jacques Cousteau</h3>
              <button
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img
                  src={editIcon}
                  alt="Edit icon"
                  className="profile__edit-icon"
                />
              </button>
            </div>

            <span className="profile__role">Explorador</span>
          </div>

          <button
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img src={addIcon} alt="Add icon" className="profile__add-icon" />
          </button>
        </div>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
