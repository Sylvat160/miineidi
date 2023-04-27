import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import LoginModal from "../ShareModal/LoginModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img
          src={Home}
          alt=""
          onClick={() => console.log("clicked")}
          className="cursor-pointer"
        />
        <UilSetting className="cursor-pointer" />
        <img
          src={Noti}
          alt=""
          onClick={() => setLoginModalOpened(true)}
          className="cursor-pointer"
        />
        <img
          src={Comment}
          alt=""
          onClick={() => console.log("clicked")}
          className="cursor-pointer"
        />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <LoginModal
        loginModalOpened={loginModalOpened}
        setLoginModalOpened={setLoginModalOpened}
      />
    </div>
  );
};

export default RightSide;
