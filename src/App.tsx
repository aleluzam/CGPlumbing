import "./App.css";
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Layout";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Layout />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route
          path="/contactus"
          element={<div className="text-2xl text-center py-20">Contact Us</div>}
        />{" "}
        <Route
          path="/aboutus"
          element={<div className="text-2xl text-center py-20">About Us</div>}
        />{" "}
        <Route
          path="/services"
          element={<div className="text-2xl text-center py-20">Services</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
