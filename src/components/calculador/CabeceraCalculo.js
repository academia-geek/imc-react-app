import React from 'react';

let cabecera = ({titulo,mensaje}) =>{
	//const {titulo,mensaje} = props;
    console.log(mensaje);
    return (
        <div>{titulo}</div>
    );
}

export default cabecera;