import React from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import Bascula from './BasculaIMC';

function cuerpo(){
    return (
        <section>
            <FormularioCalculo></FormularioCalculo>
            <VerCalculo altura={120} peso = {80}/>
            <Bascula/>
        </section>
    );
}

export default cuerpo;