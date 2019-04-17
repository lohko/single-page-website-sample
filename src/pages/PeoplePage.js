import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";
import "../styles/PeoplePage.css";

class PeoplePage extends Component {
  render() {
    return (
      <div id="people">
        <MDBCard className="my-5 px-1 pb-5 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">Your team</h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Present your awesome team here!
            </p>
            <MDBRow>
              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1485821179985-36e164c77e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="img-fluid"
                />

                <h4 className="font-weight-bold dark-grey-text my-4">
                  Example employee
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Position</h6>
                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-fb buttontausta"
                  color="black"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-tw buttontausta"
                  color="black"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>

              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="img-fluid"
                />

                <h4 className="font-weight-bold dark-grey-text my-4">
                  Example employee
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Position</h6>
                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-fb buttontausta"
                  color="black"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-tw buttontausta"
                  color="black"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>

              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1459245330819-1b6d75fbaa35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="img-fluid"
                />

                <h4 className="font-weight-bold dark-grey-text my-4">
                  Example employee
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Position</h6>
                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-fb buttontausta"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  floating
                  size="s"
                  className="mx-1 mb-0 btn-tw buttontausta"
                  color="black"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default PeoplePage;
