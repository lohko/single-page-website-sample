import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const ContactPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact
      </h2>
      <p className="text-center w-responsive mx-auto pb-3">
        Keep in mind that for a little extra cost You can get a Contact form
        plugin that will send Your client's message straight to your email.
      </p>
      <p className="font-italic text-center w-responsive mx-auto pb-3">
        Easy and simple. Right?
      </p>
      <MDBRow>
        <MDBCol>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=eerikinkatu%2025&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="black" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Eerikinkatu 25</p>
              <p className="mb-md-0">20100, Turku</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="black" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+358 44 273 5969</p>
              <p className="mb-md-0">Mon - Fri, 8:00-18:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="black" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@lohkosoftware.fi</p>
              <p className="mb-md-0">esko-matti@lohkosoftware.fi</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ContactPage;
