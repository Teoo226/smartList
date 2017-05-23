import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import HeroImage from './componentes/HeroImage';
import Content from './componentes/Content';
import FormBox from './componentes/Form';
import Footer from './componentes/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <HeroImage />
        <Content />
        <FormBox />
        <Footer />
      </main>
    );
  }
}

export default App;
