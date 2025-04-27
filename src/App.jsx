import "./App.css";
import { Routes, Route } from "react-router-dom"; // Use BrowserRouter from react-router-dom
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../Routes/Home";
import Alerts from "../Routes/Alerts";
import Tips from "../Routes/Tips";
import Community from "../Routes/Community";
import Reports from "../Routes/Report";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
