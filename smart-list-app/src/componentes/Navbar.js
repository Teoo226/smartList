import React, { Component } from 'react';
import '../css/Navbar.css';

export default class Navbar extends Component{
  render(){
    return (
      <nav className="navbar">
        <div className="brand">
          <span>SmartList</span>
        </div>
        <ul className="login-register">
          <li><a href="#sectionRegistro">Registre-se</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    );
  }
}
