import React from "react"
import { Routes, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AllProduct from "./pages/AllProduct"
import Products from "./pages/Products"
import Footer from "./components/Footer"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Recruit from "./components/Recruit"


function App() {
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-black text-white">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/recruit' element={<Recruit />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
