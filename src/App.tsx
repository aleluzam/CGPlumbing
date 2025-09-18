import "./App.css";
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Layout";
import ContactUs from "./components/ContactUs";
import Galery from "./components/Galery";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import browserLang from "browser-lang";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

const supportedLanguages = ["en", "es"];

function App() {
  const defaultLocale = browserLang({
    languages: supportedLanguages,
    fallback: "en",
  });

  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem("preferredLanguage");
    return saved && supportedLanguages.includes(saved) ? saved : defaultLocale;
  });
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "eIKKfBUtybNXFADVHQZwTg";

    fetch(
      `https://api.i18nexus.com/project_resources/translations/${locale}/default?api_key=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar traducciones");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando traducciones:", error);
        setMessages({
          nav_home: "Home",
          nav_contact: "Contact Us",
          nav_about: "About Us",
          nav_services: "Services",
        });
        setLoading(false);
      });
  }, [locale]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col">
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
          />
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
                <Galery />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </IntlProvider>
  );
}

export default App;
