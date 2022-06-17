import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userservice from '../services/userservice';

const FriendsPage = () => {
    const {id}=useParams()
    const [userData,setUserData]=useState(null)
useEffect(()=>{
userservice.getById(id).then(response=>setUserData(response.data))
},[])
console.log(userData)
    return ( 
        <div className='FriendsPage'>

        </div>
     );
}
 
export default FriendsPage;