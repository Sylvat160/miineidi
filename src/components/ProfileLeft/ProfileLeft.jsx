import React, { useState} from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
const ProfileLeft = () => {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="ProfileSide">
      <LogoSearch />
      {isConnected ? (
        <InfoCard />
      ) : (
        <div>
          <button className="button logout-button" onClick={() => setIsConnected(true)}>Se connecter</button>
        </div>
      )}
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft