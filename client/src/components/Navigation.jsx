import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.scss';
import {Link} from 'react-router-dom';


function Navigation() {
  return (
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <ReactBootstrap.Navbar  collapseOnSelect expand="lg" className="nav-bar-color box-shadow" variant="light">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link class='signinBtn'to="/signin">signin</Link>
          </ReactBootstrap.Nav>

      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
    </div>
   
  )
}

export default Navigation;