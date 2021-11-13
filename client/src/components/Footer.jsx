import * as ReactBootstrap from 'react-bootstrap';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
  return (


<<<<<<< HEAD
    <ReactBootstrap.Navbar  className='navbar hadow p-3 mb-5 rounded'  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand style={{color:'red'}} className='brand' href="/">Make YOur Event Happen</ReactBootstrap.Navbar.Brand>
=======
    <ReactBootstrap.Navbar  className='navbar hadow p-3 footer'  collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <ReactBootstrap.Container> */}
        <ReactBootstrap.Navbar.Brand style={{color:'red'}} className='brand' href="/">MAke YOur Event HAppen</ReactBootstrap.Navbar.Brand>
>>>>>>> e7389b645f2d5939ed86cdce9a30cef225d7df04

          <ReactBootstrap.Nav>
            <Link to="/calender">Book Event</Link>
          </ReactBootstrap.Nav>
<<<<<<< HEAD
=======
          <div className="d-flex flex-rowalign-items-end ms-5">

          <h3 className=" ms-3"style={{color: 'white'}}><i class="fab fa-twitter"></i></h3>
          <h3 className=" ms-3"style={{color: 'white'}}><i class="fab fa-instagram"></i></h3>
          <h3 className=" ms-3"style={{color: 'white'}}><i class="fas fa-envelope"></i></h3>
          </div>
      {/* </ReactBootstrap.Container> */}
>>>>>>> e7389b645f2d5939ed86cdce9a30cef225d7df04
    </ReactBootstrap.Navbar>
  
  
   
  )
}

export default Footer;