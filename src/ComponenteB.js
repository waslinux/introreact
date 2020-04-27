import React, { Children } from 'react';
//criação de components

function ComponenteB(props) {
    return (
    <div>Componente B! {props.children}</div>
    )
}

export default ComponenteB