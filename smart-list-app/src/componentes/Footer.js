import React, { Component } from 'react';
import '../css/Footer.css';

export default class Footer extends Component {
  render(){
    return(
      <section className="sectionFooter">
        <div className="contact">
          <h2>Entre em contato</h2>
          <p>Endereço fictício, Rua dos Bobos nº 0</p>
          <p>Candy Kingdom, AT 12345-678</p>
          <p>email@daempresa.com</p>
        </div>
        <div className="follow">
          <h2>Siga-nos</h2>
          <button type="button" name="button">Facebook</button>
          <button type="button" name="button">Twitter</button>
        </div>
        <div className="legal">
          <p>&copy; 2145 by MusTech Solutions, todos os direitos reservados</p>
        </div>
      </section>
    );
  }
}
