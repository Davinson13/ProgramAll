import React, { useState } from 'react';
import Suma from './Suma';
import Calculadora from './Calculadora';

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
    <>
      {seccion === 'home' && (
        <>
          <h1>Home</h1>
          <button onClick={() => setSeccion('app1')}>
            Application 1
          </button>
          <button onClick={() => setSeccion('app2')}>
            Application 2
          </button>
        </>
      )}

      {seccion === 'app1' && <Suma alRegresar={() => setSeccion('home')}/>}
      {seccion === 'app2' && <Calculadora alRegresar={() => setSeccion('home')}/>}

      {/*
      {seccion !== 'home' && (
        <button onClick={() => setSeccion('home')}>
          Volver al Home
        </button>
      )}*/}
    </>
  );
}

export default App;
