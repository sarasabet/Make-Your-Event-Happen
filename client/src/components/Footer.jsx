import * as ReactBootstrap from 'react-bootstrap';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
  return (


    <ReactBootstrap.Navbar  className='navbar hadow p-3 footer'  collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <ReactBootstrap.Container> */}
        <ReactBootstrap.Navbar.Brand style={{color:'red'}} className='brand' href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav>
            <Link to="/calender">Book Event</Link>
          </ReactBootstrap.Nav>
          <div className="d-flex flex-rowalign-items-end ms-5">

          <h3 className=" ms-3"style={{color: 'white'}}><i class="fab fa-twitter"></i></h3>
          <h3 className=" ms-3"style={{color: 'white'}}><i class="fab fa-instagram"></i></h3>
          <h3 className=" ms-3"style={{color: 'white'}}><i class="fas fa-envelope"></i></h3>
          </div>
      {/* </ReactBootstrap.Container> */}
    </ReactBootstrap.Navbar>
  
  
   
  )
}

export default Footer;