import "./App.css";
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Layout";
import ContactUs from "./components/ContactUs";
import Galery from "./components/Galery";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import LanguageSelector from "./components/LanguageSelector";
import browserLang from "browser-lang";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

const supportedLanguages = ["en", "es"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

interface TranslationMessages {
  [key: string]: string;
}

function App() {
  const defaultLocale = browserLang({
    languages: [...supportedLanguages],
    fallback: "en" as SupportedLanguage,
  }) as SupportedLanguage;

  const [locale, setLocale] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem("preferredLanguage");
    return saved && supportedLanguages.includes(saved as SupportedLanguage)
      ? (saved as SupportedLanguage)
      : defaultLocale;
  });

  const [messages, setMessages] = useState<TranslationMessages>({});
  const [loading, setLoading] = useState<boolean>(true);

  const changeLanguage = (newLocale: SupportedLanguage) => {
    setLocale(newLocale);
    localStorage.setItem("preferredLanguage", newLocale);
  };

  useEffect(() => {
    const apiKey: string = "lcTD39OaZ8D-7SusM9T5Kg";

    fetch(
      `https://api.i18nexus.com/project_resources/translations/${locale}/principal?api_key=${apiKey}`
    )
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error("Error al cargar traducciones");
        }
        return response.json();
      })
      .then((data: TranslationMessages) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error: Error) => {
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
      <div className="min-h-screen flex items-center justify-center w-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
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
        <LanguageSelector
          currentLocale={locale}
          onLanguageChange={changeLanguage}
        />
      </div>
    </IntlProvider>
  );
}

export default App;
