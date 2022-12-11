//Footer de la app 

//Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class = "horus-container__footer">
            <div class = "horus-container__footer-logo">
                <img class = "horus-container__footer-logo-img" src = "./../src/assets/img/logo.png" alt = "logo"></img>
            </div>
            <div class = "horus-container__footer-social">
                <a class = "horus-container__footer-social-link" href = "#"><img class = "horus-container__footer-social-link-img" src = "./../src/assets/img/r1.png" alt = "facebook"></img></a>
                <a class = "horus-container__footer-social-link" href = "#"><img class = "horus-container__footer-social-link-img" src = "./../src/assets/img/r2.png" alt = "instagram"></img></a>
                <a class = "horus-container__footer-social-link" href = "#"><img class = "horus-container__footer-social-link-img" src = "./../src/assets/img/r3.png" alt = "twitter"></img></a>
            </div>
            <div class = "horus-container__footer-info">
                <p class = "horus-container__footer-info-text">HorusMart</p>
                <p class = "horus-container__footer-info-text">Direccion: Calle 123</p>
                <p class = "horus-container__footer-info-text">Telefono: 123456789</p>
                <p class = "horus-container__footer-info-text">Email:
                    <a class = "horus-container__footer-info-text-link" href = "#">
                        <span class = "horus-container__footer-info-text-link-span"></span>
                    </a>
                </p>
            </div>
            <div class = "horus-container__footer-map">
                <iframe class = "horus-container__footer-map-iframe" src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1803.7260992458423!2d51.546593723411604!3d25.289006947657377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1670624465855!5m2!1ses!2scl" width = "600" height = "450" style = {{border: 0}} allowfullscreen = "" loading = "lazy"></iframe>
            </div>
        </div>
        
    )
}

export default Footer

