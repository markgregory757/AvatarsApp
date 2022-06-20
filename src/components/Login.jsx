import {useFormik} from "formik"
// import * as Yup from "yup"
import {Link,Outlet,Navigate,useNavigate,BrowserRouter as Router} from "react-router-dom"
import userservice from "../services/userservice"
import { useState,useContext,useEffect} from "react"
import {AuthContext} from "../context/userContext"
import { Component } from "react"

import Home from "./Home"
import FriendsPage from "./friendsPage"
import Profile from "./Profile"
import CreateAvtr from "./CreateAvtr"
import Passing from "./passing"
// import Passing from "./passing"

export function isLoggedIn(userA){
     var logUser=null
     logUser=userA
     console.log(logUser)
     if(logUser!=null){
     return {
            // logUser
      logUser
     }
     }
     
}

 
const Login = () => {
    
     const [loggedUser,setLoggedUser]=useState(null)
let navigate=useNavigate()

const formik=useFormik({
    initialValues:{
        username:"",
        password:""
    },

    // validationSchema:Yup.object({
    //     username:Yup.string()
    //     .required("Required"),
    //     password:Yup.string()
    //     .max(15,"must be 15 characters or less")
    //     .min(3,"must be less than 3 characters or more")
    //     .required("Required")
    // }),
    onSubmit:(values)=>{
      let userInfo={
       username:values.username,
       password:values.password
      }
     
      userservice.login(userInfo).then(response=>{
        if (response.data.user){
       setLoggedUser(response.data)
       isLoggedIn(response.data)
       console.log(response.data)
        navigate("/AvatarsApp/Home",{state:loggedUser})
    }else{
        navigate("/user")
    }
   
    })
}
})



return ( 
<div className="Login">

         <div className="LoginForm">
 <div className="LoginTitle"><h1 >Login</h1></div>
           <form className="elForme" onSubmit={formik.handleSubmit}>
                <label title="username">username</label>
                <br/>
                <input id="username" 
                username="username"
                placeholder="username"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
                    />
                    {/* {formik.touched.username && formik.errors.username ? <p>{formik.errors.username}</p>:null} */}
                     <br />
                <label title="password">password</label>
                <br/>
                <input 
                id="password"
                 name="password"
                  placeholder="password"
                   type="text"
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.password}
                    />
                    {/* { formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>:null} */}
                   
                    <button type="submit" style={{
                        borderRadius:"10px",
                        backgroundColor:"Highlight"
                    }}  name="loginButton">
                      Login
                    </button>

                   
                   
            </form>
            </div>
           
 </div>
 
)
}


         

     





 export default Login
// if(logUser){
// module.exports=logUser

// }

 {/* {loggedUser &&  */}
 

// console.log(AddUser)

//     const {AddUser}=context


// <button onClick={(loggedUser)=>AddUser(loggedUser)}></button>
//         )}  }