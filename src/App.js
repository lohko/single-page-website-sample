import React, { Component } from "react";
import "./App.css";
import LandingPage from "./component/LandingPage";
import NavigationBarPage from "./component/NavigationBarPage";
import ProjectsPage from "./component/ProjectsPage";
import PeoplePage from "./component/PeoplePage";
import BlogPage from "./component/BlogPage";
import FooterPage from "./component/FooterPage";
import ContactPage from "./component/ContactPage";
//import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBarPage />
        <LandingPage />
        <ProjectsPage />
        <BlogPage />
        <PeoplePage />
        <ContactPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
