// lifecycle

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import RenderizacaoCondicional from './RenderizacaoCondicional'
import Listas from './Listas'
import Eventos from './Eventos'

class App extends Component {

  render() {
    return (
      <di>
        <RenderizacaoCondicional />
        <Listas />
        <Eventos />
      </di>
    )
  }
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement) 