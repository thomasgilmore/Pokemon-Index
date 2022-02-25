import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header toggleViewLogin={toggleViewLogin} />} />
        <Route path="login" element={<Login toggleViewLogin={toggleViewLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
