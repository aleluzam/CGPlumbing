import Navbar from "./Navbar";
import ContactQr from "./ContactQr.tsx";
import QrMenu from "./QrMenu.tsx";
import { useState } from "react";

const Layout = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
    console.log("Cambio de estado");
  };

  const closeModal = () => {
    setActive(false);
    console.log("Cerrando modal");
  };

  return (
    <>
      <Navbar />
      <ContactQr toggleActive={toggleActive} />
      <QrMenu active={active} onClose={closeModal} />
    </>
  );
};

export default Layout;
