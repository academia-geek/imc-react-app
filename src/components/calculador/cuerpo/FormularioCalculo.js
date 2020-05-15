import React from 'react';

const formulario = () => {
    return (
        <article>
            <label>Peso (Kg)</label>
            <input type = "number" id = "peso"></input>
            
            <label>Altura (cm)</label>
            <input type = "number" id = "altura"/>
        </article>
    );
}