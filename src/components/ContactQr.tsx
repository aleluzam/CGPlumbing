import Phone from "../assets/images/phone.svg";

interface Props {
  toggleActive: () => void;
}

const ContactQr = ({ toggleActive }: Props) => {
  return (
    <div className="fixed bottom-5 right-5 z-1000">
      <div
        onClick={() => toggleActive()}
        className="p-4 sm:p-5 bg-orange-perfect flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
      >
        <img
          className="w-8 lg:w-7 h-full filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
          src={Phone}
          alt="Phone"
        />
      </div>
    </div>
  );
};

export default ContactQr;
