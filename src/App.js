import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import './App.css';
import { Link, Outlet } from 'react-router-dom';

 export class App extends Component{
  render (){
    return(
    <div className="App">
    <h1>Avatar</h1>
       <nav style={{
         borderBottom: "solid 1px",
         paddingBottom: '1rem'
       }}>
 <Link to='/'>Home</Link> | {" "}
 <Link to='/user'>Login</Link> | {" "}
 <Link to='/Profile'>Profile</Link> | {" "}
 <Link to='/CreateAvtr'>CreateAvatar</Link> | {" "}
 <Link to='/LogOut'>LogOut</Link> | {" "}
 <Link to='/Registration'>Registration</Link> 
   </nav>
   
   <Outlet /> 
 </div>
        )};
}

// export default App;
// <div className="App">
//        <h1>Avatar</h1>
//           <nav style={{
//             borderBottom: "solid 1px",
//             paddingBottom: '1rem'
//           }}>
//     <Link to='/'>Home</Link> | {" "}
//     <Link to='/Login'>Login</Link> | {" "}
//     <Link to='/Profile'>Profile</Link> | {" "}
//     <Link to='/CreateAvtr'>CreateAvatar</Link> | {" "}
//     <Link to='/LogOut'>LogOut</Link> | {" "}
//     <Link to='/Registration'>Registration</Link> 
//       </nav>
      
//       <Outlet /> 
//     </div>