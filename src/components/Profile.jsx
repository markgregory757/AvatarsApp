import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import userservice from '../services/userservice';

function Profile(props){

  const location = useLocation()
  const { from } = location.state
   console.log("stateLoggedUser",props)
    
    console.log("location",from);
    return(
      <div className="Profile">

<h2>profile</h2>
      </div>

    )
}
export default Profile;