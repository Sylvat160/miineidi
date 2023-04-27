import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Informations</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Statut : </b>
        </span>
        <span> Non certifie</span>
      </div>

      <div className="info">
        <span>
          <b>Habite a </b>
        </span>
        <span>Ouaga 2000</span>
      </div>

      {/* <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div> */}

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
