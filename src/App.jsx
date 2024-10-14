import { HashRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Submit from "./pages/Submit/Submit"
import Scan from "./pages/Scan/Scan"
import ScanResult from "./pages/ScanResult/ScanResult"
import Result from "./pages/Result/Result"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/scanning" element={<ScanResult />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/:number" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
