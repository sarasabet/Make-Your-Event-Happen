import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.scss'

function Navigation() {
  return (
    <ReactBootstrap.Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="#home">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">

          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets">Signup</ReactBootstrap.Nav.Link>

          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  )
}

export default Navigation;