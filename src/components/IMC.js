import React from 'react';
import CalculadorApp from './calculador/CalculadorApp'

function cargarContenidoIMC(){
    return (
        <div>
            <h4>Cálculo de Indice de Masa Corporal IMC</h4>
            <CalculadorApp></CalculadorApp>
        </div>
    );
}

export default cargarContenidoIMC;