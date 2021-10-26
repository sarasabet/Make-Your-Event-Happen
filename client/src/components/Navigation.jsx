import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.scss';
import {Link} from 'react-router-dom';


function Navigation() {
  return (
    <ReactBootstrap.Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link to="/signin">signin</Link>
          </ReactBootstrap.Nav>

      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  )
}

export default Navigation;