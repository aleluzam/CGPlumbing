import "./App.css";
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Layout";
import ContactUs from "./components/ContactUs";
import Galery from "./components/Galery";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Layout />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route
          path="/contactus"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />{" "}
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Galery /> <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
