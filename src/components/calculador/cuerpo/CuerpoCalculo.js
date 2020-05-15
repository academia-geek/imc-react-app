import React from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import Bascula from './BasculaIMC';

function cuerpo(){
    return (
        <section>
            <FormularioCalculo></FormularioCalculo>
            <VerCalculo/>
            <Bascula/>
        </section>
    );
}

export default cuerpo;