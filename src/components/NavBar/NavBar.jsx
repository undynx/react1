import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
    return (
        <>
            <Navbar className="bg-light">

                <Container>
                <Navbar.Brand href="#home">Movida Roller</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Freeskate" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.rollerblade.com/uruguay/skates/?/all/freeskate">Rollerblade</NavDropdown.Item>
                            <NavDropdown.Item href="http://www.sebaskates.com/en/skates/?pg=3">SEBA - FR</NavDropdown.Item>
                            <NavDropdown.Item href="https://flyingeagleskate.com/collections/adult-inline-skates">Flying Eagle</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Velocidad" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.rollerblade.com/uruguay/skates/speed/">Rollerblade</NavDropdown.Item>
                            <NavDropdown.Item href="http://www.sebaskates.com/en/skates/?pg=2">SEBA - FR</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Niñes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.rollerblade.com/uruguay/skates/?/boys">Rollerblade</NavDropdown.Item>
                            <NavDropdown.Item href="http://www.sebaskates.com/en/skates/?pg=6">SEBA - FR</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                
                <CartWidget />
            </Navbar>
            
            </>
    )
}

export default NavBar;