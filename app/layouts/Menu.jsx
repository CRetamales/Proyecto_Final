import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
//Para el carrito de compras se importa el componente Badge
import {Badge} from 'react-bootstrap'
const Menu = () => {

    //Funcion que retorna un string con el nombre del color 
    //dependiendo del la posicion del scroll
    const changeColor = () => {
        
        //Se obtiene la clase del elemento con clase navbar
        const element = document.getElementsByClassName('navbar')[0]
        const element_1 = document.getElementsByClassName('navbar-nav')[0];
        var width = window.innerWidth;
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        //Se edita el estilo del elemento
        if (width < 768){
            if(scrollPosition > 150){
                element.style.backgroundColor = '#221D23'
                element_1.style.backgroundColor = '#221D23'
            }else{
                element.style.backgroundColor = 'transparent'
                element_1.style.backgroundColor = '#221D23'
                element_1.style.opacity = '0.8'
            }
        }
        else{
            if(scrollPosition > 300){
                element.style.backgroundColor = '#221D23'
                element_1.style.backgroundColor = '#221D23'
            }else{
                element.style.backgroundColor = 'transparent'
                element_1.style.backgroundColor = 'transparent'
                
                
            }
        }
    }
    function MenuLayout(){
        const element =(
            <Navbar  expand="lg" >
                
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <img src="./../src/assets/img/logo.png" alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
                        HorusMart
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Electronics/1">Electronica</Nav.Link>
                            <Nav.Link href="/Furniture/1">Muebles</Nav.Link>
                            <Nav.Link href="/Clothes/1">Ropa</Nav.Link>
                            <Nav.Link href="/Shoes/1">Zapatos</Nav.Link>
                            <Nav.Link href="/Others/1">Otros</Nav.Link>
                            
                            
                            <Nav.Link href="#link">
                                <img src="./../src/assets/img/cart.png" alt="cart" width="30" height="30" className="d-inline-block align-text-top" />
                                <Badge bg="danger">0</Badge>
                            
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <img src="./../src/assets/img/account.jpg" alt="account" width="30" height="30" className="d-inline-block align-text-top" style={{borderRadius: '50%'}} />
                            </Nav.Link>

                            <NavDropdown title="Juan" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mis pedidos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cerrar sesion</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    

                
            </Navbar>
        );
        //Setear un intervalo cada vez que se mueva el scroll
        window.onscroll = () => {
            //Se llama a la funcion changeColor para que se actualice el color
            changeColor()
        }

        return element

    }
    return (        
        <MenuLayout />
    )

}

export default Menu
