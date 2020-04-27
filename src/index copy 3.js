import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

function soma(a, b) {
  alert(a + b)
  console.log(a + b)
}

function App() {
  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(10, 20)} name="Wander Augusto" />
      <ComponenteA>
        <ComponenteB>
        <Button onClick={() => soma(40, 20)} name="Alessandra Alves" />
        </ComponenteB>
      </ComponenteA>
    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement) 