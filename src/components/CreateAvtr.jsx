import React, { useState } from "react";
import UserDataService from "../services/userservice";
import AvtrDataService from "../services/avtrservice";
import { Link, Outlet } from 'react-router-dom';

const CreateAvtr = () => {
    const powerLevels = [1,2,3,4,5];
    function onPowerChange(){
        let rPL = powerLevels[Math.floor(Math.random() * powerLevels.length)];
        console.log("rpl",rPL);
        setAvtr({ ...avtr, ["powerlevel"]: rPL });
        return;
    }
  
  const initialAvtrState = {
    id: null,
    name: "",
    powerType: "",
    powerlevel:null,
    health:null,
    victories:null,
    published: false
  };
  const [avtr, setAvtr] = useState(initialAvtrState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAvtr({ ...avtr, [name]: value });
  };
  const saveAvtr = () => {
    var data = {
      name: avtr.name,
      powerType: avtr.powerType,
      powerlevel: avtr.powerlevel,
      health: 100,
      victories:0
    };
    AvtrDataService.create(data)
      .then(response => {
        setAvtr({
          id: response.data.id,
          name: response.data.name,
          powerType: response.data.powerType,
          powerlevel: response.data.powerlevel,
          health: response.data.health,
          victories: response.data.victories,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newAvtr = () => {
    setAvtr(initialAvtrState);
    setSubmitted(false);
  };
  return (
    
    <div className="submit-form">
      <h1>Create Avatar</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newAvtr}>
            <Link to='/user'>Login</Link>
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
              value={avtr.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
          <label htmlFor="Powertype">Power type</label>
                <select value={avtr.powerType}
              onChange={handleInputChange} id="powerType" name="powerType">
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Earth">Earth</option>
                    <option value="Air">Air</option>
                </select>
          </div>
          <div className="form-group">
          <label htmlFor="PowerLevel">Power Level</label>
                <button  className="btn btn-success"  name="powerLevel" id="powerBtn" onClick={onPowerChange} onChange={handleInputChange} value={avtr.powerlevel}>Roll</button>
                powerLevel: {avtr.powerlevel}
          </div>
          <div className="form-group">
              <button type="submit" onClick={saveAvtr}>Create</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateAvtr;
