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
    <MDBCard className="my-5 px-5 pb-5" id="blog_background">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCardBody cascade className="text-center">
              <h2 className="font-weight-bold">
                <p>Your story</p>
              </h2>
              <p>Hover your mouse over the photo below!</p>
            </MDBCardBody>
            <MDBView hover id="blogphoto">
              <MDBMask className="flex-center" overlay="black-strong">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol className="text-center" md="6">
                      <p style={{color:"white"}}>
                          Want your website to be more responsive and more user friendly? No problem, we will help you create website that suits to your company's needs!
                      </p>
                    </MDBCol>
                    <MDBCol md="3" />
                  </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
};

export default BlogPage;
