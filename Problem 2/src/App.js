import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './component/home';
import Products from './component/product';
import ProductDetail from './component/productDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
