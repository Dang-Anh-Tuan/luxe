import React from "react";
import HomePage from "./pages/Home";
import ServicePage from "./pages/Service";
import ContactPage from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/Blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
