import React, { Component } from "react";
import "../styles/LandingPage.css";
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";

class LandingPage extends Component {
  render() {
    return (
      <div id="home">
        <MDBView id="landingpage_bg_image">
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="black-light"
          >
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                    Single Page
                  </h3>
                  <hr className="hr-light my-4 w-75" />
                  <h4 className="subtext-header mt-2 mb-4">
                    Yksinkertaisuus on kaunista. Tästä sivupohjasta valmistamme näyttävän scrollattavan sivun.
                  </h4>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default LandingPage;
