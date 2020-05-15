import React from 'react';

var verCalculo = (p) => {
	let {altura, peso} = p;
    const imc = (peso/altura);
    return (
        <article>
            <span>IMPC</span>
            <span>{imc.toFixed(2)}</span>
        </article>
    );
}

export default verCalculo;