import { Routes,Route,Link } from "react-router-dom"
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import "../src/index.css"

function App() {
  return (
<>
<div id="navbar">
  <Link to="/home"> home </Link>
  <Link to="/blue"> blue </Link>
  <Link to="/red"> red </Link>
</div>
<div id="main-section">
   <Routes>
     <Route path="/home" element={Home} />
     <Route path="/blue" element={Blue} />
     <Route path="/red" element={Red} />
   </Routes>
</div>
</>

  );
}

export default App;