import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Songs from "./components/Songs"; // since it's inside components folder

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </Router>
  );
}

export default App;
