
import Header from '../layouts/Header'
import Panel from '../layouts/Panel'


//Se importa el catalogo
import Catalogo from '../components/Catalogo'


const path = window.location.pathname;

console.log(path);
//Tomar el id del producto
const id = path.split('/')[2];

const Electronics = () => {
    
    


    return (
        <>
            <Header/>
            <Panel/>
            <Catalogo category='Electronics' start={id*10-10} end={10*id}/>
        </>
    )

}

export default Electronics