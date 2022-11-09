import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Aboutme from '../src/components/Aboutme/Aboutme'
import Presentarion from './components/Presentation/Presentation';
import Projeto from './components/Projeto/Projeto'

function App() {
  return (
      <>
      <Navbar/>
      <Aboutme/>
      <Presentarion/>
      <Projeto/>
      </>
  
  );
}

export default App;
