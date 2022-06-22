import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userservice from '../services/userservice';
import avtrservice from '../services/avtrservice';
import { Link, Outlet } from 'react-router-dom';


const FriendsPage = (props) => {
   
    console.log("props",props)
    const {id}=useParams()
    console.log("id",id);
    const [userData,setUserData]=useState(null)
    const [avtrData,setAvtrData]=useState(null)
        useEffect(()=>{
            userservice.getById(id).then(response=>setUserData(response.data))
            
        // avtrservice.getALLPublished().then(response=>console.log(response))
        },[])
        console.log("User",userData);
        // console.log(userData)
        // console.log(avtrData)
            return ( 
                <div className='FriendsPage'>
                    
                    {userData && <h1>{userData.name} Profile </h1>}
                    <footer><Link to='/login'>Send Friend Request</Link></footer>
                </div>
            );
}
 
export default FriendsPage;