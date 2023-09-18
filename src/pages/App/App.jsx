import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../../components/Layout/Layout";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <main className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
    </main>
  );
}
