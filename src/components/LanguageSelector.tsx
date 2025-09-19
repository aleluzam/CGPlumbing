type SupportedLanguage = "en" | "es";

interface LanguageSelectorProps {
  currentLocale: SupportedLanguage;
  onLanguageChange: (locale: SupportedLanguage) => void;
}

const LanguageSelector = ({
  currentLocale,
  onLanguageChange,
}: LanguageSelectorProps) => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
        <button
          onClick={() => onLanguageChange(currentLocale === "en" ? "es" : "en")}
          className="flex items-center gap-2 text-gray-800 text-xs font-medium py-2 px-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <span className="text-base">🌐</span>
          <span>{currentLocale.toUpperCase()}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
