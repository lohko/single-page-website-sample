import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import "../styles/ProjectPage.css";

const ProjectsPage = () => {
  return (
    <section id="services" className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">Your services</h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Here we can write you a catchy selling speech that will catch Your
        customer's attention with this beautifully layout.
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView
            className="overlay rounded z-depth-1"
            id="project_image1"
            waves
          >
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Service 1</h4>
            <p className="grey-text">
                Present your company's services and products to your customers
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView
            className="overlay rounded z-depth-1"
            id="project_image2"
            waves
          >
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Service 2</h4>
            <p className="grey-text">
              Present your company's services and products to your customers
            </p>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView
            className="overlay rounded z-depth-1"
            id="project_image3"
            waves
          >
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Service 3</h4>
            <p className="grey-text">
              Present your company's services and products to your customers
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ProjectsPage;
