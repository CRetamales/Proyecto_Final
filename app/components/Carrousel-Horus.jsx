//Componente que muestra un carrousel de imágenes

//Se importa el componente Carousel de react-bootstrap
import {Carousel} from 'react-bootstrap'

const CarrouselHorus = () => {
    return (
        <div className = "horus-container__carousel">
            <Carousel>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://via.placeholder.com/3001x1000" alt = "carousel1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://via.placeholder.com/3002x1000" alt = "carousel2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://via.placeholder.com/3004x1000" alt = "carousel3"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarrouselHorus