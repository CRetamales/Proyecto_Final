import Header from '../layouts/Header'
import Panel from '../layouts/Panel'


//Se importa el catalogo
import Catalogo from '../components/Catalogo'

//Tomar el path de la url
const path = window.location.pathname;

console.log(path);
//Tomar el id del producto
const id = path.split('/')[3];


const Furniture = () => {
    
    return (
        <>
            <Header/>
            <Catalogo category='Furniture' start={id*10-10} end={10*id}/>
            <Panel/>
        </>
    )
}

export default Furniture