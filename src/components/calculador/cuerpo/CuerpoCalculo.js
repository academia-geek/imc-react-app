import React from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import Bascula from './BasculaIMC';

function cuerpo(){
    return (
        <section>
            <FormularioCalculo></FormularioCalculo>
            <VerCalculo altura={110} peso={120} edad={5}/>
            <Bascula/>
        </section>
    );
}

export default cuerpo;