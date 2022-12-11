
import Menu from "./Menu";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Layout = ({ children }) => {
    return (
        <>
            <Container className= "horus-container">
                <Menu />
                
                {children}
                <Footer />
            </Container> 
        </>
    );
}

export default Layout;