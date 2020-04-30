import React from "react";

const Eventos = () => {

    const name = "Wander Augusto"

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        alert('evento clicado')
        console.log(e)
        alert(name)
        // eslint-disable-next-line no-unused-expressions
        name
    }

    const Button = <button onClick={showEvent}>Mostrar evento</button>

    return (
        <div>
            <br />
            <br />
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D.</p>
            <input onChange={handleChange} />
            {Button}
        </div>
    );
};
export default Eventos;
