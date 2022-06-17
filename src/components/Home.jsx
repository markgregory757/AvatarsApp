import { useEffect,useState } from "react";
import userservice from "../services/userservice";
import { Link } from "react-router-dom";
const Home = () => {
const [users,setUsers]=useState([])
useEffect(()=>{
const data=userservice.getALLPublished()
data.then(result=>{
 const  userArr=result.data
    setUsers(userArr)
})
},[])
console.log(users)

    return ( 
<div className="Home">
{users && users.map((user,i)=>{
return <div className="HomeUser" key={i}>
    <h3>
        <Link to={`/friendsPage/${user.id}`}>
        {user.name}
        </Link>
    
    </h3>
    </div>
})}

</div>

     );
}
 
export default Home;