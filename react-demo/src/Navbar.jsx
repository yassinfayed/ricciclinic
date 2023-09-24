import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logoreal from './realogo.png'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbaro = () =>{

    const nav = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);


    axios.defaults.withCredentials= true;


    const logout = () => {
      axios.post('http://localhost:8800/logout')
        .then(response => {
          if (response.data.success) {
            setLoggedIn(false); // Update the logged-in state
            nav("/login")
          }
        })
        .catch(error => {
          console.error('Error logging out:', error);
        });
    };

    useEffect(() => {
      axios
        .get("http://localhost:8800/check-login-status")
        .then((response) => {
          if (response.data.authenticated) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        })
        .catch((error) => {
          console.error("Error checking authentication status:", error);
        });
    }, []);



    const gotoSection = (sectionId) => {
      nav("/about");
      setTimeout (()=> {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      },100);
      
     
    };

    const gotoNut = () =>{
      nav("/nutrition");
      setTimeout (()=> {
        const sectionElement = document.getElementById("top");
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      },100);
      
    };


    const gotoDent = () =>{
      nav("/dentistry");
      setTimeout (()=> {
        const sectionElement = document.getElementById("top");
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      },100);
      
    };


    const gotoDerma = () =>{
      nav("/derma");
      setTimeout (()=> {
        const sectionElement = document.getElementById("top");
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      },100);
      
    };

    const gotoBook = () =>{
      nav("/reservation");
    }

    const gotoProfile = () => {
      nav("/profile");
    }

    const gotoHome = () => {
      nav("/");
    }

  const gotologin = () => {
    nav("/login");
  }



    return(
        <Navbar className="tit" expand="md" bg="light" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logoreal} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className=''/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto offset-md-3 offset-lg-4">
              <Nav.Link className="navbar-button" onClick={gotoHome}>Home</Nav.Link>
              <NavDropdown title="About" id="about-dropdown" className="navbar-button custom-dropdown">
              <NavDropdown.Item
                className="navbar-button"
                onClick={() => gotoSection('our-mission')}
              >
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-button"
                onClick={() => gotoSection('staff')}
              >
                Staff
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-button"
                onClick={() => gotoSection('vip-system')}
              >
                VIP System
              </NavDropdown.Item>
              <NavDropdown.Item
                className="navbar-button"
                onClick={() => gotoSection('contact-us')}
              >
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Services" id="services-dropdown" className="navbar-button custom-dropdown">
                <NavDropdown.Item className='navbar-button' onClick={gotoDerma}>Dermatology</NavDropdown.Item>
                <NavDropdown.Item className='navbar-button' onClick={gotoDent}>Dentistry</NavDropdown.Item>
                <NavDropdown.Item className='navbar-button' onClick={gotoNut}>Nutrition</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link className="navbar-button" onClick={gotoBook}>Book</Nav.Link>
              {loggedIn ? (
                    // Display profile and logout if logged in
                    <>
                      <NavDropdown title={<i className="fas fa-user" />} id="profile-dropdown" className="navbar-button custom-dropdown col-lg-6 col-md-4 righ">
                          <NavDropdown.Item className="navbar-button" onClick={gotoProfile}>
                            Profile
                          </NavDropdown.Item>
                          <NavDropdown.Item className="navbar-button" onClick={logout}>
                            Logout
                          </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  ) : (
                    // Display login if not logged in
                    <Nav.Link className="navbar-button col-lg-6 col-md-4 righ" onClick={gotologin}>
                      Log In
                    </Nav.Link>
                  )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Navbaro;