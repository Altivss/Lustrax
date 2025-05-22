import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AddProduct from './pages/AddProducts'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
      </Routes>
    </div>
  )
}

export default App
