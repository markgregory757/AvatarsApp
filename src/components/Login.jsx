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

// export function isLoggedIn(userA){
//      var logUser=null
//      logUser=userA
//      console.log(logUser)
//      if(logUser!=null){
//      return {
//             // logUser
//       logUser
//      }
//      }
     
// }

 
const Login = () => {
    
     const [loggedUser,setLoggedUser]=useState(null)
        let navigate=useNavigate()

            const formik=useFormik({
                initialValues:{
                    username:"",
                    password:""
                },
    onSubmit:(values)=>{
      let userInfo={
       username:values.username,
       password:values.password
      }
     
      userservice.login(userInfo).then(response=>{
        if (response.data.user){
       setLoggedUser(response.data);
    //    isLoggedIn(response.data)
       console.log("data",response.data);
    }else{
        navigate("/Login");
    }
    // if(loggedUser){
    //     navigate("/Profile",{state:loggedUser})
    //    }else{
    //     console.log("loggedState Error");
    //    }
    })
}
})



return ( 
        <div className="Login">

            <div className="LoginForm">
             <div className="LoginTitle"><h1 >Login</h1></div>
             {loggedUser ? (<div>
          <h4>You Loggin successfully!</h4>
          <h4>loggedUser.name</h4>
          <button className="btn btn-success">
            <Link to='/Profile' state={{from:`Loggeduser`}}>Profile</Link>
          </button>
        </div>) : (<form className="elForme" onSubmit={formik.handleSubmit}>
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

                   
                   
            </form>)}
           
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