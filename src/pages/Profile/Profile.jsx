import React, { useState} from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  const [seeProfil, setSeeProfil] = useState(true)
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            {seeProfil && (<ProfileCard/>)}
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile