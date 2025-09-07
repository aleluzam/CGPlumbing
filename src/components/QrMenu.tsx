import Qr from "../assets/images/qr.svg";

interface Props {
  active: boolean;
}
const QrMenu = ({ active }: Props) => {
  return (
    <>
      <div
        className={`fixed ${
          active ? "opacity-100" : "opacity-0 invisible"
        } flex flex-col justify-center items-center h-screen w-full transition-all duration-500`}
      >
        <div className="bg-white p-10 rounded-2xl opacity-90 ">
          <h1 className="text-center barlow-condensed-bold text-3xl lg:text-3xl p-2">
            Get in Touch
          </h1>
          <div className="lg:flex lg:gap-20  text-center">
            <div className="">
              <img className="w-50" src={Qr} alt="Qr" />
              <h1 className="lg:p-2 p-1 barlow-condensed-bold">English</h1>
              <h2 className="open-sans-light mb-5">+1 876 453 4578</h2>
            </div>
            <div>
              <img className="w-50" src={Qr} alt="Qr" />
              <h1 className="p-2 barlow-condensed-bold">Spanish</h1>
              <h2 className="open-sans-light mb-5">+1 876 453 4578</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrMenu;
