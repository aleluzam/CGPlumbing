import React, { useEffect } from "react";
import QrSpanish from "../assets/images/spanish.svg";
import QrEnglish from "../assets/images/english.svg";
import { FormattedMessage } from "react-intl";

interface Props {
  active: boolean;
  onClose: () => void;
}

const QrMenu = ({ active, onClose }: Props) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active) {
        onClose();
      }
    };

    if (active) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [active, onClose]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center cursor-pointer z-[10000]
      transition-all duration-300 ease-out
      ${active ? "opacity-100 backdrop-blur-sm" : "opacity-0"}
    `}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white px-8 rounded-2xl relative cursor-default shadow-2xl
        transition-all duration-300 ease-out transform
        ${
          active
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }
      `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold
          transition-colors duration-200 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        <h1 className="text-center barlow-condensed-bold text-3xl lg:text-3xl p-2">
          <FormattedMessage id="menutitle" />
        </h1>

        <div className="lg:flex lg:gap-20 text-center">
          <div>
            <h1 className="lg:p-2 p-1 barlow-condensed-bold">English</h1>

            <div className="block lg:hidden">
              <a href="tel:+17868734513">
                <button
                  className="bg-orange-perfect px-5 py-1 open-sans-regular border-1 rounded-2xl mb-6 cursor-pointer
                hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
                >
                  Call Us
                </button>
              </a>
            </div>

            <div className="hidden lg:block">
              <img
                className="w-50 mx-auto mb-4"
                src={QrEnglish}
                alt="QR English"
              />
              <h2 className="open-sans-light mb-5">+1 786-873-4513</h2>
            </div>
          </div>

          <div>
            <h1 className="lg:p-2 p-1 barlow-condensed-bold">Español</h1>

            <div className="block lg:hidden">
              <a href="tel:+17867955723">
                <button
                  className="bg-orange-perfect px-5 py-1 open-sans-regular border-1 rounded-2xl mb-6 cursor-pointer
                hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
                >
                  Llamar
                </button>
              </a>
            </div>

            <div className="hidden lg:block">
              <img
                className="w-50 mx-auto mb-4"
                src={QrSpanish}
                alt="QR Spanish"
              />
              <h2 className="open-sans-light mb-5">+1 786-795-5723</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrMenu;
