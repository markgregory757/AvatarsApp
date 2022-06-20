
import userservice from "../services/userservice";
import { Link } from "react-router-dom";
import React, { useLocation,useContext,useEffect,useState} from "react"
import { UserContext } from "../context/userContext";

import { App } from "../App";
// import {logUser} from "./Login"


const Home = () => {
// const context=useContext(UserContext)

const [userDATA,setUserDATA]=useState(null)


// if(user.user)
const [users,setUsers]=useState(null)
useEffect(()=>{
const data=userservice.getALLPublished()
data.then(result=>{
 const  userArr=result.data
    setUsers(userArr)
})
},[])



    return ( 


        <>
       
<div className="Home">
    {/* <Link to="/passing"></Link> */}
{/* <div>{props.user.name}</div> */}

    
{users && users.map((user,i)=>{
    
return (

<div className="HomeUser" key={i}>

    <h3>
        <Link to={`/login/friendsPage/${user.id}`}>
        {user.name}
        </Link>
    
    </h3>
    </div>
)
})}

</div>
</>
     );
}
 
export default Home;