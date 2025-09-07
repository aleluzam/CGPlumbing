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

  return (
    <>
      <Navbar />
      <ContactQr toggleActive={toggleActive} />
      <QrMenu active={active} />
    </>
  );
};

export default Layout;
