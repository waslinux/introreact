import React from 'react';
//criação de components

function Button(props) {
    const { name, onClick } = props
    // é a mesma coisa:
    //const name = props.name

    return (
    <button onClick={onClick}>{name}</button>
    )
}

export default Button