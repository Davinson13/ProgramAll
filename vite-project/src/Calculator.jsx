import React, { useState } from 'react';
import { estiloBoton, estiloHome } from './components/styles'

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
    <div style={estiloHome}>
      <hr />

      <div style={{ fontSize: '2rem', border: '1px solid black', width: '200px', textAlign: 'right' }}>
        {pantalla}
      </div>

      <div>
        <button style={estiloBoton} onClick={limpiar}>
          AC
        </button>
        <button style={estiloBoton} onClick={() => elegirOperacion('/')}>
          /
        </button>
      </div>

      <div>
        <button style={estiloBoton} onClick={() => presionarNumero(7)}>
          7
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(8)}>
          8
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(9)}>
          9
        </button>
        <button style={estiloBoton} onClick={() => elegirOperacion('*')}>
          x
        </button>
      </div>

      <div>
        <button style={estiloBoton} onClick={() => presionarNumero(4)}>
          4
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(5)}>
          5
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(6)}>
          6
        </button>
        <button style={estiloBoton} onClick={() => elegirOperacion('-')}>
          -
        </button>
      </div>

      <div>
        <button style={estiloBoton} onClick={() => presionarNumero(1)}>
          1
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(2)}>
          2
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero(3)}>
          3
        </button>
        <button style={estiloBoton} onClick={() => elegirOperacion('+')}>
          +
        </button>
      </div>

      <div>
        <button style={estiloBoton} onClick={() => presionarNumero(0)}>
          0
        </button>
        <button style={estiloBoton} onClick={() => presionarNumero('.')}>
          .
        </button>
        <button style={estiloBoton} onClick={calcular}>
          =
        </button>
      </div>

      <button style={estiloBoton} onClick={alRegresar}>
        Regresar al Home
      </button>
    </div>
  );
}

export default Calculadora;