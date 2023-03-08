import React from 'react';
import Home from './components/Home';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Pet from './components/Pet'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='pet'element={<Pet />}></Route>
    </Routes>
   
    
  );
}

export default App;

