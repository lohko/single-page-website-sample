import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView
} from "mdbreact";
import "../styles/BlogPage.css";

const BlogPage = () => {
  return (
    <div id="about">
    <MDBCard className="my-5 px-5 pb-5" id="blog_background" style={{boxShadow:"none"}}>
        <MDBRow >
          <MDBCol md="12" >
            <MDBCardBody cascade className="text-center">
              <h2 className="font-weight-bold">
                <p>Tarinasi</p>
              </h2>
            </MDBCardBody>
            <MDBView hover id="blogphoto" >
              <MDBMask className="flex-center" overlay="black-strong">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol className="text-center" md="6">
                      <p style={{color:"white"}}>
                          Sivumme ovat täynnä nerokkaita ominaisuuksia, jotka takaavat asiakkaillenne miellyttävän ja helppokäyttöisen selauskokemuksen.                      </p>
                    </MDBCol>
                    <MDBCol md="3" />
                  </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
    </MDBCard>
    </div>
  );
};

export default BlogPage;
