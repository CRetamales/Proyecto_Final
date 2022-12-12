//Importaciones de librerias
import React from 'react'
import Layout from '../layouts/Layout'
import { Routes, Route } from 'react-router-dom'

//Paginas
import Home from '../pages/Home'
import Electronics from '../pages/Electronics'
import Furniture from '../pages/Furniture'
import Clothes from '../pages/Clothes'
import Shoes from '../pages/Shoes'
import Others from '../pages/Others'

function App() {

  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Electronics/:id" element={<Electronics />} />
        <Route path="/Furniture/:id" element={<Furniture />} />
        <Route path="/Clothes/:id" element={<Clothes />} />
        <Route path="/Shoes/:id" element={<Shoes />} />
        <Route path="/Others/:id" element={<Others />} />
      </Routes>

    </Layout>
  )
}

export default App
