import React from 'react';
import PropTypes from 'prop-types';

var verCalculo = ({altura, peso, edad}) => {
	//let {altura, peso} = p;
    const imc = (peso/altura);
    return (
        <article>
            <span>IMPC</span>
            <span>{imc.toFixed(2)}</span>
        </article>
    );
}

verCalculo.propTypes = {
    altura: PropTypes.number.isRequired, 
    peso : PropTypes.number.isRequired, 
    edad : function(props, propName, componentName) {
        const miedad = props[propName];
        if (miedad < 10 || miedad > 30) {
          return new Error(
            'El campo `' + propName + '` no comple la validación del rango de edad 10 - 30 años, en el componete ' +
            ' `' + componentName + '`. Validación fallida.'
          );
        } 
      }
};
export default verCalculo;