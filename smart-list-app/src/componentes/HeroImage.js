import React, { Component } from 'react';
import Imagem from '../assets/heroImage.jpg';
import '../css/HeroImage.css';

export default class HeroImage extends Component{
  render(){
    return (
      <section className="sectionImg">
        <figure className="imgContainer">
          <img className="heroimage" src={Imagem} alt="Foto de produtos"/>
          <figcaption className="caption"><span className="captionContent">Um texto bacanudo e do balacobado</span></figcaption>
        </figure>
      </section>
    );
  }
}
