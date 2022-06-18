import {useFormik} from "formik"
// import * as Yup from "yup"
import Axios from "axios"
import userservice from "../services/userservice"
import { useState, } from "react"

import Home from "./Home"


const Login = () => {

 const [loggedUser,setLoggedUser]=useState()
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
       setLoggedUser(response.data)
    })
}
})

console.log(formik.errors)
   

return ( <>
 { loggedUser &&  <Home loggedUser={loggedUser}/>}
        <div className="signupForm">
            <form onSubmit={formik.handleSubmit}>
                <label title="username">username</label>
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
                    <button type="submit" name="loginButton">submit</button>
            </form>
        </div>
        </>
     );

}
 
export default Login;