import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import DetailsOfFood from './Components/DetailsOfFood/DetailsOfFood'
import { createContext, useState } from 'react'
import Cart from './Components/Cart/Cart'

export const CartContext= createContext();

function App() {
  const [cart, setCart]= useState([]);
  console.log(cart);
  return (
    <>
    <CartContext.Provider value={[cart, setCart]}>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/food/:foodId' element={<DetailsOfFood/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element='ERROR 404 NOT FOUND'/>
    </Routes>
    </CartContext.Provider>
    </>
  )
}

export default App
