import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import Anon from "../../img/anon.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  var adress =  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Anon} alt="" />
      </div>

      <div className="ProfileName">
        <span> { adress.slice(-10) } </span>
        <span></span>
      </div>

      {/* <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>} */}
    </div>
  );
};

export default ProfileCard;
