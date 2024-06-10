import React from 'react'
import './layout.css'
import logo from '../assets/logo.png';
import Form from './form';


const Layout = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <p className="header-title">Suite Of Business Support Services</p>
      <p className="app-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </p>
      <Form />
    </div>
  );
}

export default Layout