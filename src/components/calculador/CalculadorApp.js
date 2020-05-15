import React from 'react';
import CabeceraCalculo from './CabeceraCalculo';
import CuerpoCalculo from './cuerpo/CuerpoCalculo';

let Calculador = () =>  (
	            <section>
                    <CabeceraCalculo titulo = "Calculadora!" mensaje = "Dia del docente"/>
                    <CuerpoCalculo/>
                </section> );


export default Calculador;