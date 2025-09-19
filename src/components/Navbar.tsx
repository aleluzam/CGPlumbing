import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoNavbar from "../assets/images/LogoNavbar.png";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [link, setLink] = useState(1);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const elements = [
    {
      id: 1,
      name: "Home",
      link: "/",
      language: "navbarhome",
    },
    {
      id: 2,
      name: "Contact Us",
      link: "/contactus",
      language: "navbarcontactus",
    },
    {
      id: 3,
      name: "About Us",
      link: "/aboutus",
      language: "navbaraboutus",
    },
    {
      id: 4,
      name: "Services",
      link: "/services",
      language: "navbarservices",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentElement = elements.find((e) => e.link === currentPath);
    if (currentElement) {
      setLink(currentElement.id);
    }
  }, [location]);

  return (
    <nav className="fixed z-50 w-full">
      <div className="flex justify-between items-center bg-white sm:py-1 px-2 sm:px-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div>
          <Link to="/">
            <img
              src={LogoNavbar}
              alt="Logo"
              className="w-[140px] lg:w-[130px] py-2"
            />
          </Link>
        </div>

        <div className="hidden sm:block ">
          <ul className="flex sm:gap-20">
            {elements.map((e) => (
              <li
                key={e.id}
                className={`open-sans-light text-sm md:text-lg ${
                  link == e.id ? "underline" : ""
                }`}
              >
                <Link to={e.link}>
                  <FormattedMessage id={e.language} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={toggleIsOpen} className="sm:hidden px-4">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6L18 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6H20M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`bg-[#3a9b8e] transition-all duration-300 absolute w-full sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-2">
          {elements.map((e) => (
            <li
              key={e.id}
              onClick={() => {
                toggleIsOpen();
              }}
              className={`open-sans-regular text-center my-5 text-xl ${
                link == e.id ? "underline" : ""
              }`}
            >
              <Link to={e.link}>
                <FormattedMessage id={e.language} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
