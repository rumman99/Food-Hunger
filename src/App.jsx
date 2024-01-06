import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import DetailsOfFood from './Components/DetailsOfFood/DetailsOfFood'
import { createContext, useState } from 'react'
import Cart from './Components/Cart/Cart'

export const CartContext= createContext();
import lunch1 from "../src/imgs/foods/lunch/lunch1.png"
import Login from './Components/Login/Login'

function App() {
  const [cart, setCart]= useState([{
    title: 'Healthy Meal Plan',
    body: 'Change the way of our Taste',
    id: 1,
    category: 'lunch',
    price: 10.99,
    img: lunch1,
    
}]);
  const [loginUser, setLoginUser]= useState({});
  console.log(loginUser);
  
  return (
    <>
    <CartContext.Provider value={[cart, setCart],[loginUser, setLoginUser]}>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/food/:foodId' element={<DetailsOfFood/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element='ERROR 404 NOT FOUND'/>
    </Routes>
    </CartContext.Provider>
    </>
  )
}

export default App
