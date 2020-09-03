import React from 'react';
import './App.css';
import Header from './components/Header'
import Slide from './components/Slide'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
