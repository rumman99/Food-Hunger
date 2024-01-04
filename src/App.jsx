import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import DetailsOfFood from './Components/DetailsOfFood/DetailsOfFood'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/food/:foodId' element={<DetailsOfFood/>}/>
      <Route path='*' element='ERROR 404 NOT FOUND'/>
    </Routes>
    </>
  )
}

export default App
