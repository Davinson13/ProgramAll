import React, { useState } from 'react';
import { estiloBoton, estiloHome } from './components/styles'

function Suma({ alRegresar }) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);


    const sumar = () => {
        setResultado(Number(num1) + Number(num2));
    };

    return (
        <div style={estiloHome}>
            <h2>Sumar 2 numeros</h2>

            <label>Number 1:</label>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <label>Number 2:</label>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <button onClick={sumar}>sumar</button>

            <h3>Resultado: {resultado}</h3>

            <button onClick={alRegresar}>regresar</button>
        </div>
        
    );
}

export default Suma;