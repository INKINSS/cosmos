import { IoIosArrowBack } from "react-icons/io";
import Anchor from "../common/Anchor";
import { useState } from "react";

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className="right-10 top-16 overflow-hidden">
      <IoIosArrowBack
        size={"1.6rem"}
        onClick={handleMenu}
        className={`right-10 top-7 absolute cursor-pointer sm:hidden transform duration-150 ${
          menuIsOpen ? "rotate-180" : "rotate-0"
        }`}
      />

      <ul
        className={`absolute bg-white w-[10rem] sm:shadow-none sm:w-auto ssm:top-16 sm:top-[1.1rem] right-10 flex flex-col sm:flex-row sm:space-x-2 lg:space-x-5 transform duration-150 sm:translate-x-0 ${
          menuIsOpen ? "translate-x-0" : "translate-x-[200%]"
        }`}
      >
        <Anchor label="inicio" href="/" />
        <Anchor label="servicios" href="/servicios" />
        <Anchor label="descargas" href="/descargas" />
        <Anchor label="contacto" href="/contacto" />
      </ul>
    </nav>
  );
};

export default Menu;
