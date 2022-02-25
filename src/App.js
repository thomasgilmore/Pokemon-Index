import { useState } from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  const [viewLogin, setViewLogin] = useState(false);

  const toggleViewLogin = () => {
    setViewLogin(!viewLogin);
  }

  return (
    <div>
      <Header toggleViewLogin={toggleViewLogin} />
      {viewLogin ? <Login toggleViewLogin={toggleViewLogin} /> : null }
    </div>
  );
}

export default App;
