import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component{
  constructor(){
    super();
    this.state = {
      classeForm: '',
      nome:'',
      sobrenome: '',
      email: '',
      termosUso: ''
    }

    this.enviaForm = this.enviaForm.bind(this);
  }

  enviaForm(evento){
    evento.preventDefault();
  }

  salvaAlteracao(nomeInput, evento){
    this.setState({[nomeInput]: evento.target.value});
  }

  componentWillMount(){
    this.setState({classeForm: 'formCadastro'});
  }

  render(){
    return(
      <div className="form">
        <h2>Registre-se</h2>
        <form className={this.state.classeForm} method="post" onSubmit={this.enviaForm}>
          <label>
            Nome
            <input type="text" name="nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this, 'nome')} required />
          </label>
          <label>
            Sobrenome
            <input type="text" name="sobrenome" value={this.state.sobrenome} onChange={this.salvaAlteracao.bind(this, 'sobrenome')} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={this.state.email} onChange={this.salvaAlteracao.bind(this, 'email')} required />
          </label>
          <label>
            <input type="checkbox" name="" value={this.state.termosUso} onChange={this.salvaAlteracao.bind(this, 'termosUso')} required />
            Li e aceito os Termos de Utilização
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

class Social extends Component{
  render(){
    return(
      <div className="registroSocial">
        <h2>Registre-se com o</h2>
        <button type="button">Facebook</button>
        <span>ou</span>
        <button type="button">Google +</button>
      </div>
    );
  }
}

export default class FormBox extends Component{
  render(){
    return(
      <section id="sectionRegistro">
        <Form />
        <Social />
      </section>
    );
  }
}
