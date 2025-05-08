import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CourseDetailsPage from "./components/CourseDetailsPage";
import AboutUsPage from "./components/AboutUsPage";
import "./styles/global.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />; 
      case "courses":
        return <CourseDetailsPage />;
      case "about-us":
        return <AboutUsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} /> 
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
