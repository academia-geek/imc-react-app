import React from 'react';
import FormularioCalculo from './FormularioCalculo';
import Bascula from './BasculaIMC';

function cuerpo(){
    return (
        <section>
            <FormularioCalculo></FormularioCalculo>
            <Bascula/>
        </section>
    );
}

export default cuerpo;