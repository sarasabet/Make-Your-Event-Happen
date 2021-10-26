import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.css'


function Navigation() {
  return (
    <ReactBootstrap.Navbar class="shadow-lg p-3 mb-5 bg-white rounded" collapseOnSelect expand="lg" bg="light" variant="light">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand >Make YOur Event HAppen</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">

       
            <ReactBootstrap.Nav.Link  class='bookEvent-link'href="eventinfo">Book Event</ReactBootstrap.Nav.Link>
        
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  )
}

export default Navigation;
