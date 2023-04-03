import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/EnteryPoint";
import Home from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
