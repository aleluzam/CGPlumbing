import FondoTuberias from "../assets/images/FondoTuberias.jpg";
import Logo from "../assets/images/Logo.png";
import ContactButton from "./Button";
import { FormattedMessage } from "react-intl";

const HeroSection = () => {
  const bgImagen = {
    backgroundImage: `url(${FondoTuberias})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  return (
    <div style={bgImagen} className="h-screen">
      <div className="flex flex-col items-center justify-center h-full px-4  lg:gap-0 gap-20">
        <div>
          <img src={Logo} alt="LogoPrincipal" className="w-150 sm:w-200 mt-5" />
          <h1 className="open-sans-bold text-xs sm:text-xl text-center lg:text-2xl">
            <FormattedMessage id="slogan" />
          </h1>
        </div>
        <div className="mt-9">
          <ContactButton children="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
