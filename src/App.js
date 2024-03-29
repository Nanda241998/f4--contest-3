import React, {useState,useEffect} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import ProductsContainer from './Components/Products-Container';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from './actions/index';
import Cart from './Components/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const loading  = useSelector((state) =>state.data.loading)
     const data  = useSelector((state) =>state.data.data)
     const error = useSelector((state) =>state.data.error)
    
      const dispatch = useDispatch()
    
     useEffect(() =>{
          dispatch(fetchData())
     }, [dispatch]
     )
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error}</h1>
    }
  
    

 

  
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductsContainer prodData={data} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;