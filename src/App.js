import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import Form from "./Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
