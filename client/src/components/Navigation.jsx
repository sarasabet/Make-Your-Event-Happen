import * as ReactBootstrap from 'react-bootstrap';
import './Navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {
  return (

    <ReactBootstrap.Navbar className='navbar hadow p-3 mb-5 bg-body rounded' fixed="top"  collapseOnSelect expand="lg"  variant="light">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand style={{color:'red'}} className='brand' href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link className='bookevent-btn'to="/calender">Book Event</Link>
          </ReactBootstrap.Nav>

      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  
  
   
  )
}

export default Navigation;
