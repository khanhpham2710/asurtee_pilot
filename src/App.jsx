import { HashRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Submit from "./pages/Submit/Submit"
import Scan from "./pages/Scan/Scan"
import ScanResult from "./pages/ScanResult/ScanResult"
import ScanTest from "./components/ScanTest/ScanTest"

function App() {
  return (
    <div>
      <Router basename="asurtee_pilot">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/result" element={<ScanResult />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
