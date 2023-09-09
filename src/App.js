import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<ProductList />}></Route>
          <Route path='/product/:productId' element={<ProductDetails />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;