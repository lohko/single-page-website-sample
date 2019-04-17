import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBContainer
} from "mdbreact";
import "../../styles/NavigationBarPage.css";
import { Link, animateScroll as scroll } from "react-scroll";

class NavigationBarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const navStyle = { marginTop: "top" };

    return (
      <Router>
        <div>
          <MDBNavbar
            style={navStyle}
            dark
            expand="md"
            fixed="top"
            id="navigationbar"
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <span className="white-text">Lohko Software</span>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <Link
                        style={{color:"white"}}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                        style={{color:"white"}}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >About us</Link>                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                        style={{color:"white"}}
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >Services</Link>                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                        style={{color:"white"}}
                        activeClass="active"
                        to="people"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >People</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link
                        style={{color:"white"}}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >Contact</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="!#">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="!#">
                      <MDBIcon fab icon="twitter" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="!#">
                      <MDBIcon fab icon="instagram" />
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default NavigationBarPage;
