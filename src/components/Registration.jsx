import React, { useState } from "react";
import UserDataService from "../services/userservice";
import { Link, Outlet } from 'react-router-dom';

const Registration = () => {
  const initialUserState = {
    id: null,
    name: "",
    password: "",
    published: false
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = () => {
    var data = {
      name: user.name,
      password: user.password
    };
    UserDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          password: response.data.password,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  return (
    
    <div className="submit-form">
      <h1>Registration?</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            <Link to='/Login'>Login</Link>
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
              value={user.name}
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
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default Registration;
