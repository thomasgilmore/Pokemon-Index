import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.tsx";
import FavoritePokemon from "./Components/FavoritePokemon.tsx";
import Login from "./Components/Login.tsx";
import UserDashboard from "./Components/UserDashboard.tsx";

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
