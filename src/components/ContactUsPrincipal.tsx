import QrSpanish from "../assets/images/spanish.svg";
import QrEnglish from "../assets/images/english.svg";
import ContactForm from "./ContactForm";
import FondoTuberias from "../assets/images/FondoTuberias.jpg";

const ContactUsPrincipal = () => {
  const contact = [
    { id: 1, lenguage: "English", number: "+1 786-873-4513", qr: QrEnglish },
    { id: 2, lenguage: "Spanish", number: "+1 786-795-5723", qr: QrSpanish },
  ];
  const bgImagen = {
    backgroundImage: `url(${FondoTuberias})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backgroundBlendMode: "overlay",
  };

  return (
    <div style={bgImagen} className="min-h-screen lg:h-screen py-11 lg:px-35">
      <div className="px-4 sm:px-6 lg:px-7">
        <h1 className="text-6xl md:text-7xl lg:text-7xl  barlow-condensed-bold text-center font-bold mb-2 text-blue-perfect">
          Contact Us
        </h1>
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-center open-sans-light px-4 mb-10">
          Reach out for support via phone or email. We provide free estimates.
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-7 py-4 sm:py-5 lg:py-6 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="w-full lg:flex-shrink-0 lg:w-auto">
          <ul className="gap-6 sm:gap-8 lg:gap-10 flex items-center flex-col p-4 sm:p-6 lg:p-8">
            {contact.map((m) => (
              <div
                key={m.id}
                className="w-full py-3 sm:py-4 lg:py-5 flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 xl:gap-35"
              >
                <div className="text-left flex-1 min-w-0">
                  <h1 className="barlow-condensed-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 sm:py-3 lg:py-5 leading-tight">
                    {m.lenguage}
                  </h1>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-lg  break-all">
                    {m.number}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={m.qr}
                    alt="QR"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="w-full lg:flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPrincipal;
