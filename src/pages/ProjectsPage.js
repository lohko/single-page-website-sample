import React from "react";
import { MDBContainer,MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact";
import "../styles/ProjectPage.css";

const ProjectsPage = () => {
  return (
    <MDBContainer>
    <section id="services" className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">Palvelut</h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Tässä osiossa voit kertoa yrityksesi tuotteista, palveluista tai tuotesarjoista. Osio on myös erinomainen paikka esimerkiksi blogille.</p>
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
            <h4 className="font-weight-bold my-3">Palvelu</h4>
            <p className="grey-text">
                Tuotteen tai palvelun lyhyt esittelyteksti.
            </p>
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
            <h4 className="font-weight-bold my-3">Palvelu</h4>
            <p className="grey-text">
              Tuotteen tai palvelun lyhyt esittelyteksti.
            </p>
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
            <h4 className="font-weight-bold my-3">Palvelu</h4>
            <p className="grey-text">
              Tuotteen tai palvelun lyhyt esittelyteksti.
            </p>
        </MDBCol>
      </MDBRow>
    </section>
    </MDBContainer>
  );
};

export default ProjectsPage;
