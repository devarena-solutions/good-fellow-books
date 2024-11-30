import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import lazyImport from "./lazyImport";
import LayoutComponent from "./components/LayoutComponent";

import "./App.css";

const Home = lazyImport("./screens/Home");
const About = lazyImport("./screens/About");
const Contact = lazyImport("./screens/Contact");

function App() {

  const LoadingMessage = () => (
    <div className="loader-container">
      <div className="loader" />
    </div>
  );
  return (
    <Router>
      <LayoutComponent>
        <Suspense fallback={<LoadingMessage />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </LayoutComponent>
    </Router>
  );
}

export default App;
