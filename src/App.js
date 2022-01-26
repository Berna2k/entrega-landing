import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import marroc from './assets/marroc.jpeg'
import kinder from './assets/kinder.jpeg'
import oreo from './assets/oreo.jpeg'

function App() {
  return (
    <>
    <NavBar />
    
    <div className='DivCard'>    
      <ItemListContainer 
      name='Marroc'
      peso='1KG'
      description='Pote de 1KG sabor Marroc'
      img={marroc}
    />
      <ItemListContainer 
      name='Kinder'
      peso='1KG'
      description='Pote de 1KG sabor kinder'
      img={kinder}
    />
      <ItemListContainer 
      name='Oreo'
      peso='1KG'
      description='Pote de 1KG sabor Oreo'
      img={oreo}
    />
    </div>

    </>

  );
}

export default App;

