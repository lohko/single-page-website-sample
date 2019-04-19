import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../styles/FooterPage.css";
import { Link} from "react-scroll";

const FooterPage = () => {
  return (
    <MDBFooter
      color="mdb-color"
      className="font-small pt-4 mt-4"
      id="footerpage"
    >
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Yritys
            </h6>
            <p>
              Lisätietoa yrityksestä
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Palvelut</h6>
            <p>
              <Link
                  style={{color:"white", paddingRight:"12px"}}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={2000}
              >Palvelu</Link>            </p>
            <p>
              <Link
                  style={{color:"white", paddingRight:"12px"}}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={2000}
              >Palvelu</Link>            </p>
            <p>
              <Link
                  style={{color:"white", paddingRight:"12px"}}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={2000}
              >Palvelu</Link>            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Info
            </h6>
            <p>
              <a href="#!">Käyttöehdot</a>
            </p>
            <p>
              <a href="#!">Tuotteet</a>
            </p>
            <p>
              <a href="#!">Apua</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Yhteystiedot</h6>
            <p>
              <i className="fa fa-home mr-3" /> Turku, 10012, FI
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="lohkosoftware.fi"> Lohkosoftware.fi </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
