import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
import VideoGallery from "./components/VideoGallery";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Feature />
      <VideoGallery />
      <Coach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
