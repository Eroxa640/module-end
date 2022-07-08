import React from "react";
import { Route, Routes } from "react-router-dom";
import Shops from "./components/Shops/Shops";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Shops />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
