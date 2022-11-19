import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import Vocal from "../pages/Vocal";
import Teory from "../pages/Teory";
import Event from "../pages/Event";
import About from "../pages/About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Vocal" element={<Vocal />} />
      <Route path="/Teory" element={<Teory />} />
      <Route path="/Event" element={<Event />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default Routing;
