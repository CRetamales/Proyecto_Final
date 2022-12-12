//Componente que muestra un carrousel de imágenes

//Se importa el componente Carousel de react-bootstrap
import {Carousel} from 'react-bootstrap'

const CarrouselHorus = () => {
    return (
        <div className = "horus-container__carousel">

            <Carousel>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://picsum.photos/id/135/3000/1000" alt = "carousel1"/>
                    <Carousel.Caption>
                        <h3>Horus Mart</h3>
                        <p>La mejor tienda de productos varios.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://picsum.photos/id/119/3000/1000" alt = "carousel2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "horus-container__carousel-img" src = "https://picsum.photos/id/122/3000/1000" alt = "carousel3"/>
                </Carousel.Item>

            </Carousel>


        </div>
    )
}

export default CarrouselHorus