import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavigationBarPage from "./pages/components/NavigationBarPage";
import ProjectsPage from "./pages/ProjectsPage";
import PeoplePage from "./pages/PeoplePage";
import BlogPage from "./pages/BlogPage";
import FooterPage from "./pages/FooterPage";
import ContactPage from "./pages/ContactPage";

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
