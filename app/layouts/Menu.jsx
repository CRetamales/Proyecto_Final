import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
//Para el carrito de compras se importa el componente Badge
import {Badge} from 'react-bootstrap'
const Menu = () => {

    //Funcion que retorna un string con el nombre del color 
    //dependiendo del la posicion del scroll
    const changeColor = () => {
        console.log(window.scrollY)
        return "red"
    }

    return (
            
            <Navbar  expand="lg" style={{backgroundColor: changeColor()}}>
                
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <img src="./../src/assets/img/logo.png" alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
                        HorusMart
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Electronica</Nav.Link>
                            <Nav.Link href="#link">Muebles</Nav.Link>
                            <Nav.Link href="#link">Ropa</Nav.Link>
                            <Nav.Link href="#link">Zapatos</Nav.Link>
                            <Nav.Link href="#link">Otros</Nav.Link>
                            
                            
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
        
    )
}

export default Menu