import React, { useState, useEffect } from "react";
import UserDataService from "../services/userservice";
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const initialUserState = {
    id: null,
    name: "",
    password: "",
    published: false
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let username = currentUser.name; 

  const getUser = () => {
    UserDataService.findByName(username)
      .then(response => {
        
        console.log("User",response.data);
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };
  // useEffect(() => {
  //   if (id)
  //     getUser(id);
  // }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  return (
    
   <div className="submit-form">
      <h1>Login</h1>
      {submitted ? (
        <div>
          <h4>Login successfull!</h4>
          <button className="btn btn-success" >
            <Link to='/Profile'>Profile</Link>
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentUser.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              required
              value={currentUser.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <button onClick={getUser} className="btn btn-success">
            Login
          </button>
        </div>
      )}
    </div>
  )
};
export default Login;
