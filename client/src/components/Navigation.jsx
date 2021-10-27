import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {
  return (
    <div className="shadow-box-example z-depth-5">
    <ReactBootstrap.Navbar class='navbar' fixed="top"  collapseOnSelect expand="lg" className="nav-bar-color box-shadow" variant="light">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand class='brand' href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link class='bookevent-btn'to="/Book Event">signin</Link>
          </ReactBootstrap.Nav>

      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
    </div>
  
  
   
  )
}

export default Navigation;
