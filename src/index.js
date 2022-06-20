import React from 'react';
import './index.css';
import {App} from './App';
import NewApp from './newApp';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AuthContext } from './context/userContext';
import Registration from './components/Registration';
import CreateAvtr from './components/CreateAvtr';
import Login from "./components/Login"
import Profile from './components/Profile';
import LogOut from './components/LogOut';
import Home from './components/Home';

import FriendsPage from './components/friendsPage';
const container = document.getElementById('root');

const root = createRoot(container);


root.render(
 <React.StrictMode>
  <NewApp></NewApp>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
