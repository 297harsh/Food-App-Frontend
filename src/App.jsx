import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/placeorder" element={<PlaceOrder/>} ></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
