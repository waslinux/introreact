import React, { Children } from 'react';
//criação de components

function ComponenteA(props) {
    return (
    <div>Componente A!
        <div>{props.children}</div>
    </div>
    )
}

export default ComponenteA