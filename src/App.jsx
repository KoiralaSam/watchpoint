import "./App.css";
import { Routes, Route } from "react-router-dom"; // Use BrowserRouter from react-router-dom
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../Routes/Home";
import Alerts from "../Routes/Alerts";
import Tips from "../Routes/Tips";
import Community from "../Routes/Community";
import Reports from "../Routes/Report";
import { SignInContext } from "../Context/SingInContext";
import { useContext } from "react";
import SignIn from "../components/SingIn";

function App() {
  const { ShowSignIn } = useContext(SignInContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        ShowSignIn && "overflow-y-hidden"
      }`}
    >
      {ShowSignIn && <SignIn />}
      <Navbar />
      <main className="flex-grow mt-20">
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
