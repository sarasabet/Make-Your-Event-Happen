import * as ReactBootstrap from 'react-bootstrap';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
  return (


    <ReactBootstrap.Navbar  className='navbar hadow p-3 mb-5 rounded'  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand style={{color:'red'}} className='brand' href="/">Make YOur Event Happen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link to="/calender">Book Event</Link>
          </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar>
  
  
   
  )
}

export default Footer;