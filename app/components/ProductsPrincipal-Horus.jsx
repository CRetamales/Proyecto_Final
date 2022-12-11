//Componente que muestra por medio de cards 
//Los tres primeros productos
//de un llamado a la API

//Se importa el componente Card de react-bootstrap
import {Card} from 'react-bootstrap'
//Se importa la clase Producto
import Producto from '../utils/product-class'


//Se crea una instancia de la clase Producto
const productInstance = new Producto();
//Se llama al metodo getTop3Products
productInstance.getTop3Products();

const ProductsPrincipalHorus = () => {

    return (
        <div className = "horus-container__products"></div>

    )

}

export default ProductsPrincipalHorus