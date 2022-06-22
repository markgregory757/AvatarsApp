import React from 'react';
import './index.css';
import {App} from './App';

import FriendsPage from './components/friendsPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { AuthContext } from './context/userContext';
import Registration from './components/Registration';
import CreateAvtr from './components/CreateAvtr';
import Login from "./components/Login"
import Profile from './components/Profile';
import LogOut from './components/LogOut';
import Home from './components/Home';

const NewApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
                
                {/* <Route path='/' element={<Navigate to="/Home"/>}/>  */}
                <Route path='/' element={<App/>}>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/Home' element={<Home/>}/>
                  <Route path='/Registration' element={<Registration/>}></Route>
                  <Route path='/CreateAvtr' element={<CreateAvtr/>}></Route>
                  <Route path='/Profile' element={<Profile/>}></Route>
                  <Route path='/friendsPage/:id' element={<FriendsPage/>}></Route>
                </Route>
          <Route path='/LogOut' element={<LogOut/>}></Route>
   
          
          
    
              <Route path='*' element={
                <main>
                  <p>there is nothing here!</p>
                </main>} 
              />
              

                 
        </Routes>
      </BrowserRouter>
     );
}
 
export default NewApp;