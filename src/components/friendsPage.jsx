import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userservice from '../services/userservice';
import avtrservice from '../services/avtrservice';


const FriendsPage = (props) => {
   
console.log(props)
    const {id}=useParams()
    const [userData,setUserData]=useState(null)
    const [avtrData,setAvtrData]=useState(null)
useEffect(()=>{
// userservice.getById(id).then(response=>setUserData(response.data))
// avtrservice.getALLPublished().then(response=>console.log(response))
},[])
// console.log(userData)
// console.log(avtrData)
    return ( 
        <div className='FriendsPage'>

        </div>
     );
}
 
export default FriendsPage;