//Importaciones de librerias
import React from 'react'
import Layout from '../layouts/Layout'
import { Routes, Route } from 'react-router-dom'

//Paginas
import Home from '../pages/Home'

function App() {

  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Layout>
  )
}

export default App
