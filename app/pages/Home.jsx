/*
Se replica el siguiente codigo a react

*/

//Se importa el componente de carrousel en la 
//carpeta components
import CarrouselHorus from '../components/Carrousel-Horus'
import ProductsPrincipalHorus from '../components/ProductsPrincipal-Horus'
import InfoHorus from '../components/Info-Horus'
import React from 'react'


const Home = () => {
    return (
        <>
        <CarrouselHorus />
        <ProductsPrincipalHorus />
        <InfoHorus />
        </>
    )
    }

export default Home