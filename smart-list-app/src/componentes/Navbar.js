import React, { Component } from 'react';
import '../css/Navbar.css';

export default class Navbar extends Component{
  constructor(){
    super();
    this.state = {

    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(evento){
    let elementPosition = document.querySelector("#sectionRegistro").offsetTop - 80;
    evento.preventDefault();

    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  }

  render(){
    return (
      <nav className="navbar">
        <div className="brand">
          <span>SmartList</span>
        </div>
        <ul className="login-register">
          <li><a href="#sectionRegistro" onClick={this.scrollToSection}>Registre-se</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    );
  }
}
