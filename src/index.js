import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SightingsList from "./SightingsList.js";
import IndividualSighting from "./IndividualSighting.js";
import NewSighting from "./NewSighting.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Route that provides base app UI */}
      <Route path="/" element={<App />}>
        {/* Route that renders all sightings */}
        <Route index element={<SightingsList />} />
        {/* Route that renders individual sightings */}
        <Route
          path="sightings/:sightingIndex"
          element={<IndividualSighting />}
        />
        <Route path="/new" element={<NewSighting />} />
        {/* Route that matches all other paths */}
        <Route path="*" element={"Nothing here!"} />
      </Route>
    </Routes>
  </BrowserRouter>
);
