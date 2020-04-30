/* eslint-disable no-unused-expressions */
//Renderização 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const buttonA = <button>histório</button>
const buttonB = <button>Cadastrar Cliente</button>


const hasCustomer = false


export default class RenderizacaoCondicional extends Component {
    render() {

        const renderShowHistory = () => {
            <div>
                Clique no botão abaixo para visualizar o histório dos clientes.
            {buttonA}
            </div>
        }

        const renderAddCustomer = () => {
            <div>
                Clique no botão abaixo para cadastrar o cliente.
            {buttonB}
            </div>
        }

        const customer = " Wander Augusto"

        const showCustomer = () => {
            if (!hasCustomer()) return null
            return (
                <div>
                    <h1>Nome do cliente: Wander Augusto</h1>
                </div>
            )
        }


        return (
            <di>
                <h1>Digital Innovation One </h1>
                <p>Bem vindo a nossa aula!</p>
                Valor da variável hasCustomer {!!hasCustomer}
                <br />
                {hasCustomer ? renderShowHistory() : renderAddCustomer()}
                <div>
                    {showCustomer}
                </div>
            </di>
        )
    }
}


