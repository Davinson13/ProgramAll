import React, { useState } from 'react';

function Calculadora({ alRegresar }) {
  const [pantalla, setPantalla] = useState('0');
  const [operacion, setOperacion] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);

  const presionarNumero = (num) => {
    setPantalla(pantalla === '0' ? String(num) : pantalla + num);
  };

  const limpiar = () => {
    setPantalla('0');
    setOperacion(null);
    setValorAnterior(null);
  };

  const elegirOperacion = (op) => {
    setValorAnterior(pantalla);
    setOperacion(op);
    setPantalla('0');
  };

  const calcular = () => {
    const num1 = Number(valorAnterior);
    const num2 = Number(pantalla);
    let resultado = 0;

    if (operacion === '+') resultado = num1 + num2;
    if (operacion === '-') resultado = num1 - num2;
    if (operacion === '*') resultado = num1 * num2;
    if (operacion === '/') resultado = num2 !== 0 ? num1 / num2 : 'Error';

    setPantalla(String(resultado));
    setOperacion(null);
    setValorAnterior(null);
  };

  return (
    <div>
      <hr />
      
      <div style={{ fontSize: '2rem', border: '1px solid black', width: '200px', textAlign: 'right' }}>
        {pantalla}
      </div>

      <div>
        <button onClick={limpiar}>AC</button>
        <button onClick={() => elegirOperacion('/')}>/</button>
      </div>

      <div>
        <button onClick={() => presionarNumero(7)}>7</button>
        <button onClick={() => presionarNumero(8)}>8</button>
        <button onClick={() => presionarNumero(9)}>9</button>
        <button onClick={() => elegirOperacion('*')}>x</button>
      </div>

      <div>
        <button onClick={() => presionarNumero(4)}>4</button>
        <button onClick={() => presionarNumero(5)}>5</button>
        <button onClick={() => presionarNumero(6)}>6</button>
        <button onClick={() => elegirOperacion('-')}>-</button>
      </div>

      <div>
        <button onClick={() => presionarNumero(1)}>1</button>
        <button onClick={() => presionarNumero(2)}>2</button>
        <button onClick={() => presionarNumero(3)}>3</button>
        <button onClick={() => elegirOperacion('+')}>+</button>
      </div>

      <div>
        <button onClick={() => presionarNumero(0)}>0</button>
        <button onClick={() => presionarNumero('.')}>.</button>
        <button onClick={calcular}>=</button>
      </div>

      <button onClick={alRegresar}>Regresar al Home</button>
    </div>
  );
}

export default Calculadora;