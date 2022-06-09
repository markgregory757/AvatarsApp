import React from 'react';
import './index.css';
import {App} from './App';

import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Registration from './components/Registration';
import CreateAvtr from './components/CreateAvtr';
import AddTutorial from './components/AddTutorial';
import Profile from './components/Profile';
import LogOut from './components/LogOut';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
    <Route path='/Tutorials' element={<AddTutorial/>}></Route>
    <Route path='/LogOut' element={<LogOut/>}></Route>
    <Route path='/Profile' element={<Profile/>}></Route>
    <Route path='/CreateAvtr' element={<CreateAvtr/>}></Route>
        <Route path='Registration' element={<Registration/>}>
        <Route path='*' element={
          <main>
            <p>there is nothing here!</p>
          </main>} 
        />
        
        </Route>
      </Route>  
  </Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
