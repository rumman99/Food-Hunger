import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import DetailsOfFood from './Components/DetailsOfFood/DetailsOfFood'
import { createContext, useState } from 'react'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

export const CartContext= createContext();
export const LoginUserContext= createContext();

function App() {
  const [cart, setCart]= useState([]);
  const [loginUser, setLoginUser]= useState({isLogin: false, name: '', email: ''});
  
  return (
    <>
    <CartContext.Provider value={[cart, setCart]}>
    <LoginUserContext.Provider value={[loginUser, setLoginUser]}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/food/:foodId' element={<DetailsOfFood/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element='ERROR 404 NOT FOUND'/>
    </Routes>
    </LoginUserContext.Provider>
    </CartContext.Provider>
    </>
  )
}

export default App
