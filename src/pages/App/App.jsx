import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../../components/Layout/Layout";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Home from "../Home/Home";

export default function App() {
  return (
    <main className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="experience" element={<Experience />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </>
    </main>
  );
}
