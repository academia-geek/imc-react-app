import React from 'react';
import img_bascula from '../../../bascula.png';

function bs(){
	console.log(img_bascula);
    return (
        <article>
            <img src={img_bascula} width = "100" alt = "Img bascula"/>
        </article>
    );
}

export default bs;