import { HashRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Submit from "./pages/Submit/Submit"
import ScanPage from "./pages/ScanPage/ScanPage"
import Scan from "./pages/Scan/Scan"
import ScanResult from "./pages/ScanResult/ScanResult"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/scanning" element={<ScanPage />} />
          <Route path="/result" element={<ScanResult />} />
          <Route path="/result/:number" element={<ScanResult />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
