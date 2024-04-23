import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import backg from "../images/mainback-img.jpg";
import slider from "../images/slider-image.jpg";


function BasicExample() {
  return (
    <>
      <div className='position-relative' style={{ backgroundImage: `url(${backg})` ,height:"700px"}}>
        <Navbar expand="lg p-0" className="fixed-top">
          <Container className="p-3 mx-auto" style={{ width: "900px", borderRadius: "0px 0px 20px 20px", backgroundColor: "#e1e8ff", color: "#57468b" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className='col-7'>
                <Nav className='px-4' style={{ color: "#57468b" }}>
                  <Nav.Link href="#home" className='px-4'>Home</Nav.Link>
                  <Nav.Link href="#link" className='px-4'>Features</Nav.Link>
                  <Nav.Link href="#link" className='px-4'>Blog</Nav.Link>
                  <Nav.Link href="#link" className='px-4'>Shop</Nav.Link>
                  <NavDropdown title="Demos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">SaaS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Gadget Site
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tech Company</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
              <div className='col-3 text-center'>
                <Button className=" btn btn-light-blue">CONTACT US</Button></div>
              <div className='col-2 text-center'>
                <span className='fs-3'><MdShoppingCartCheckout className='m-1' />
                  <MdSearch className='m-1' />
                  <TbWorld className='m-1' /></span>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='container text-center text-white' style={{ paddingTop: "110px", paddingBottom: "50px" }}>
          <h1>Gadget Site</h1>
          <p>Website Design Template</p>
          <button className='btn btn-orange'>About Us</button>
          <button className='btn btn-blue'>More info</button>
        </div>
        <div className='position-absolute'>
          <img src={slider} alt='slider-image' className='slider-image' />
        </div>
      </div>
    </>
  );
}

export default BasicExample;