import React, { useState } from 'react';
import Suma from './Plus';
import Calculadora from './Calculator';
import Search from './Search';
import {estiloBoton, estiloHome} from './components/styles'

//Temporary Components

const Application1 = ({ volver }) => (
  <>
    <h1>Estás en Application 1</h1>
  </>
);

const Application2 = ({ volver }) => (
  <>
    <h1>Estás en Application 2</h1>
  </>
);

function App() {

  const [seccion, setSeccion] = useState('home');

  return (
    <div style={estiloHome}>
      {seccion === 'home' && (
        <>
          <h1>Home</h1>
          <button style={estiloBoton} onClick={() => setSeccion('app1')}>
            Application 1
          </button>
          <button style={estiloBoton} onClick={() => setSeccion('app2')}>
            Application 2
          </button>
          <button style={estiloBoton} onClick={() => setSeccion('app3')}>
            Application 3
          </button>
        </>
      )}

      {seccion === 'app1' && <Suma alRegresar={() => setSeccion('home')}/>}
      {seccion === 'app2' && <Calculadora alRegresar={() => setSeccion('home')}/>}
      {seccion === 'app3' && <Search alRegresar={() => setSeccion('home')}/>}

      {/*
      {seccion !== 'home' && (
        <button onClick={() => setSeccion('home')}>
          Volver al Home
        </button>
      )}*/}
    </div>
  );
}

export default App;
