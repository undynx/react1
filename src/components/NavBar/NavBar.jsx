import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <Navbar className="bg-light">

                <Container>
                    <Link to="/">
                        <Navbar.Brand className="nav-link">Movida Roller</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/items/freeskate' className="nav-link">Freeskate</Link>
                            <Link to='/items/velocidad' className="nav-link">Velocidad</Link>
                            <Link to='/items/agressive' className="nav-link">Agressive</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
                <CartWidget />
            </Navbar>
            
            </>
    )
}

export default NavBar;