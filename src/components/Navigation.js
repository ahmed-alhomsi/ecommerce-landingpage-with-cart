import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap"
import {Link} from "react-router-dom"

function Navigation() {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="me-5 navbar-brand">ecommerce website</Link>
                <input type="text" className="form-control w-auto" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/cart" className="nav-link">cart</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
  )
}

export default Navigation