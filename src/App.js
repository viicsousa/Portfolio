import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Aboutme from '../src/components//Aboutme'
import Presentarion from './components/Presentation';
import Projeto from './components/Projeto/Projeto'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
      <>
      <Navbar/>
      <Aboutme/>
      <Presentarion/>
      <Projeto/>
      <Contato/>
      <Footer/>
      </>
  
  );
}

export default App;
