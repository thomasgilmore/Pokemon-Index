import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import FavoritePokemon from "./Components/FavoritePokemon";
import Login from "./Components/Login";
import UserDashboard from "./Components/UserDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="favoritepokemon" element={<FavoritePokemon />} />
        <Route path="login" element={<Login />} />
        <Route path="userdashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
