import Qr from "../assets/images/qr.png";
import Phone from "../assets/images/Phone.png";

interface Props {
  toggleActive: () => void;
}

const ContactQr = ({ toggleActive }: Props) => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        onClick={() => toggleActive()}
        className="px-3 py-4 sm:px-6 sm:py-4 bg-orange-perfect flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
      >
        <img
          className="w-5 h-5 filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
          src={Qr}
          alt="QR Code"
        />

        <span className="text-black font-semibold text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          or
        </span>

        <img
          className="w-5 h-5 filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
          src={Phone}
          alt="Phone"
        />
      </div>
    </div>
  );
};

export default ContactQr;
