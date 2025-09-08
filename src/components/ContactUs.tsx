import Qr from "../assets/images/qr.svg";

const ContactUs = () => {
  const contact = [
    { id: 1, lenguage: "English", number: "+1 786 123 4567", qr: Qr },
    { id: 2, lenguage: "Spanish", number: "+1 786 123 4567", qr: Qr },
  ];

  return (
    <div className="min-h-screen lg:h-screen   ">
      <div>
        <h1 className="md:text-6xl py-3 barlwow-condensed-bold text-center sm:text-4xl text-2xl lg:text-6xl font-bold mb-2 text-blue-perfect">
          Contact Us
        </h1>
        <h3 className="lg:text-lg text-center text-xs sm:text-xs md:text-lg open-sans-light">
          Reach out for support via phone or email. We provide free estimates.
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row px-7 py-10 gap-20  justify-between">
        <ul className=" gap-10 flex items-center flex-col lg:px-5 ">
          {contact.map((m) => (
            <div className="lg:py-5 flex items-center lg:gap-30 gap-10 md:gap-20 xl:gap-25">
              <div className="text-left">
                <h1
                  key={m.id}
                  className="barlow-condensed-bold lg:text-5xl py-5"
                >
                  {m.lenguage}
                </h1>
                <h3 className="lg:text-xl text-sm md:text-2xl xl:text-3xl ">
                  {m.number}
                </h3>
              </div>
              <img src={m.qr} alt="QR" className="w-30" />
            </div>
          ))}
        </ul>

        <div className="border-2 w-50 "></div>
      </div>
    </div>
  );
};

export default ContactUs;
