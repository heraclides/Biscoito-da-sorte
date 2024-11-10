import React, {Component} from 'react';
import biscoito from './assets/biscoito.png';
import biscoitoAberto from './assets/biscoitoaberto.png';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      imagemBiscoito: biscoito // Imagem inicial (biscoito fechado)
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles', 'O bom-senso vale mais do que muito conhecimento' ,
      'O risco é a maior distância entre duas pessoas.',
      'Deixe de lado as preucupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mais não dependa deles',
      'A maior Barreira para o sucesso é o medo do fracasso.'
    ]
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);
    state.imagemBiscoito = biscoitoAberto;
  }

  render(){
    return(
      <div className="container">
        <img src={this.state.imagemBiscoito} className="img" ></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}


export default App;


