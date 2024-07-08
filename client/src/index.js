import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
//import Login from './components/Login'; // Assuming you have a Login component
//import Logout from './components/Logout'; // Assuming you have a Logout component

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <div>
        <Navbar /> 
      </div>
  );
}
