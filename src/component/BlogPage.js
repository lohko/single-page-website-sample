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
import "./BlogPage.css";

const BlogPage = () => {
  return (
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
                    <MDBCol md="3" />
                    <MDBCol md="6">
                      {" "}
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Quis autem vel eum iure reprehenderit
                        qui in ea voluptate velit esse quam nihil molestiae
                        consequatur. Temporibus autem quibusdam et aut officiis
                        debitis aut rerum necessitatibus saepe eveniet ut et
                        voluptates repudiandae sint et molestiae non recusandae
                        itaque earum rerum.
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
  );
};

export default BlogPage;
