import "./App.css";
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Layout";
import ContactUs from "./components/ContactUs";
import Galery from "./components/Galery";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Layout />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route
          path="/contactus"
          element={
            <div>
              <ContactUs />
            </div>
          }
        />{" "}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Galery />} />
      </Routes>
    </div>
  );
}

export default App;
