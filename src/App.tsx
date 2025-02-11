import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./sections/Home";
// import About from "./sections/About";
// import Features from "./sections/Features";
// import Contact from "./sections/Contact";
// import Screenshots from "./sections/Screenshots";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";
import Home from "./sections/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#ffedd4]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
