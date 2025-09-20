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
    const primaryApiKey: string = "lcTD39OaZ8D-7SusM9T5Kg"; // Cuenta principal (namespace: principal)
    const secondaryApiKey: string = "eIKKfBUtybNXFADVHQZwTg"; // Cuenta galería (namespace: default)

    console.log(`🌍 Cargando traducciones para idioma: ${locale}`);

    Promise.all([
      fetch(
        `https://api.i18nexus.com/project_resources/translations/${locale}/principal?api_key=${primaryApiKey}`
      )
        .then((response: Response) => {
          console.log(`✅ Cuenta principal (${response.status}):`, response.ok);
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("📄 Datos cuenta principal:", data);
          return data;
        })
        .catch((error: Error) => {
          console.warn("⚠️ Error cargando cuenta principal:", error);
          return {};
        }),

      fetch(
        `https://api.i18nexus.com/project_resources/translations/${locale}/default?api_key=${secondaryApiKey}`
      )
        .then((response: Response) => {
          console.log(`✅ Cuenta galería (${response.status}):`, response.ok);
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("🖼️ Datos cuenta galería:", data);
          return data;
        })
        .catch((error: Error) => {
          console.warn("⚠️ Error cargando cuenta galería:", error);
          return {};
        }),
    ])
      .then(
        ([primaryData, galleryData]: [
          TranslationMessages,
          TranslationMessages
        ]) => {
          const combinedMessages: TranslationMessages = {
            ...primaryData,
            ...galleryData,
          };

          console.log("🎯 Traducciones combinadas finales:", combinedMessages);
          console.log("🔍 Verificando img1:", combinedMessages.img1);
          console.log("🔍 Verificando nav_home:", combinedMessages.nav_home);
          console.log(
            "🔍 Total de claves:",
            Object.keys(combinedMessages).length
          );

          setMessages(combinedMessages);
          setLoading(false);
        }
      )
      .catch((error: Error) => {
        console.error("❌ Error crítico cargando traducciones:", error);

        const fallbackMessages: TranslationMessages = {
          nav_home: locale === "es" ? "Inicio" : "Home",
          nav_contact: locale === "es" ? "Contacto" : "Contact Us",
          nav_about: locale === "es" ? "Nosotros" : "About Us",
          nav_services: locale === "es" ? "Servicios" : "Services",

          gallery_title:
            locale === "es"
              ? "Galería de Trabajos de Plomería"
              : "Plumbing Works Gallery",
          gallery_subtitle:
            locale === "es"
              ? "Echa un vistazo a nuestro trabajo"
              : "Take a look at our work",

          img1:
            locale === "es"
              ? "Instalación de Baño Comercial"
              : "Commercial Bathroom Installation",
          img2:
            locale === "es"
              ? "Instalación de Plomería Empotrada"
              : "Built-in Plumbing Installation",
          img3:
            locale === "es"
              ? "Instalación de Lavamanos Múltiples"
              : "Multiple Sink Installation",
          img4: locale === "es" ? "Reparación de Tuberías" : "Pipe Repair",
          img5:
            locale === "es"
              ? "Instalación de Sistema de Agua"
              : "Water System Installation",
          img6:
            locale === "es"
              ? "Mantenimiento Preventivo"
              : "Preventive Maintenance",
          img7:
            locale === "es" ? "Instalación de Grifería" : "Faucet Installation",
          img8: locale === "es" ? "Reparación de Fugas" : "Leak Repair",
          img9:
            locale === "es"
              ? "Instalación de Calentador"
              : "Water Heater Installation",
          img10:
            locale === "es" ? "Servicio de Emergencia" : "Emergency Service",
          img11:
            locale === "es" ? "Instalación de Ducha" : "Shower Installation",
          img12: locale === "es" ? "Reparación de Inodoro" : "Toilet Repair",
          img13:
            locale === "es" ? "Instalación de Lavadora" : "Washer Installation",
          img14:
            locale === "es" ? "Mantenimiento de Caldera" : "Boiler Maintenance",
          img15:
            locale === "es"
              ? "Instalación de Filtro de Agua"
              : "Water Filter Installation",

          img1desc:
            locale === "es"
              ? "Instalación completa de baño comercial"
              : "Complete commercial bathroom installation",
          img2desc:
            locale === "es"
              ? "Sistema de plomería empotrada"
              : "Built-in plumbing system",
          img3desc:
            locale === "es"
              ? "Instalación de múltiples lavamanos"
              : "Multiple sink installation",
          img4desc:
            locale === "es"
              ? "Reparación profesional de tuberías"
              : "Professional pipe repair",
          img5desc:
            locale === "es"
              ? "Instalación de sistema de agua"
              : "Water system installation",
          img6desc:
            locale === "es"
              ? "Mantenimiento preventivo"
              : "Preventive maintenance",
          img7desc:
            locale === "es"
              ? "Instalación de grifería moderna"
              : "Modern faucet installation",
          img8desc:
            locale === "es"
              ? "Reparación de fugas de agua"
              : "Water leak repair",
          img9desc:
            locale === "es"
              ? "Instalación de calentador de agua"
              : "Water heater installation",
          img10desc:
            locale === "es"
              ? "Servicio de emergencia 24/7"
              : "24/7 emergency service",
          img11desc:
            locale === "es"
              ? "Instalación de ducha premium"
              : "Premium shower installation",
          img12desc:
            locale === "es" ? "Reparación de inodoros" : "Toilet repair",
          img13desc:
            locale === "es"
              ? "Instalación de conexiones para lavadora"
              : "Washer connection installation",
          img14desc:
            locale === "es"
              ? "Mantenimiento de calderas"
              : "Boiler maintenance",
          img15desc:
            locale === "es"
              ? "Instalación de filtros de agua"
              : "Water filter installation",
        };

        setMessages(fallbackMessages);
        setLoading(false);
      });
  }, [locale]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>{locale === "es" ? "Cargando..." : "Loading..."}</p>
        </div>
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
