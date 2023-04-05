import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/HomePage/HomePage";
import EnteryPoint from "./pages/EnteryPoint";
import ErrorPage from "./components/404page/404page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EnteryPoint />} />
          <Route path="/home" element={<Home />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
