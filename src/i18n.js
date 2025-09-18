// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Configuración de i18next
i18n
  // Cargar traducciones desde archivos externos
  .use(HttpBackend)
  // Detectar idioma automáticamente
  .use(LanguageDetector)
  // Integrar con React
  .use(initReactI18next)
  .init({
    // Idioma por defecto si no se detecta ninguno
    fallbackLng: "en",

    // Habilitar modo debug para desarrollo
    debug: true,

    // Configuración del backend para cargar archivos
    backend: {
      // Ruta donde están los archivos de traducción
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    // Configuración del detector de idioma
    detection: {
      // Orden de detección: localStorage, navigator, htmlTag
      order: ["localStorage", "navigator", "htmlTag"],
      // Guardar idioma seleccionado en localStorage
      caches: ["localStorage"],
    },

    // Configuración de interpolación
    interpolation: {
      // React ya escapa los valores, no necesitamos hacerlo aquí
      escapeValue: false,
    },
  });

export default i18n;
