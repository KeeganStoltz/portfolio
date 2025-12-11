import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components//Header"
import StarryBackground from "./assets/StarryBackground";

//test
export default function App() {
  return (
    <main>
      {/* Starry Background */}
      <StarryBackground starCount={200} />
     {/* Header Component */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </main>
  )
}