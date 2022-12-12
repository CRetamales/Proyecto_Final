//Producto category='Electronics' start={id*10-10} end={10*id}/>
import Producto from '../utils/product-class'

function Catalogo({category,start,end}) {
    const productInstance = new Producto();
    productInstance.getProductsByCategory(category,start,end)
}

export default Catalogo
