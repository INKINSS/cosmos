import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-10">
      <div className="flex justify-center py-5 gap-3">
        <FaSquareXTwitter className="text-customGreen" size={"2.2rem"} />
        <FaFacebookSquare className="text-customGreen" size={"2.2rem"} />
        <FaInstagramSquare className="text-customGreen" size={"2.2rem"} />
      </div>
      <div className="md:flex font-semibold text-customGrayLight text-[1.1rem] justify-center ssm:gap-0 md:gap-5">
        <span>codigo de etica y anticorrupción</span>
        <span>politica de calidad</span>
        <span>politica de privacidad</span>
        <span>politica de cookies</span>
        <span>mapa del sitio</span>
      </div>
      <span className="text-customGrayLight font-medium text-[1rem] px-5 text-center">© 1992 - 2024 COSMOS.inc - Todos los derechos reservados. Las marcas comerciales aquí mencionadas son marcas comerciales o marcas comerciales registradas de COSMOS.inc o COSMOS Estados Unidos. Los demás nombres o marcas comerciales son marcas comerciales registradas de sus respectivas empresas.</span>
    </footer>
  );
};

export default Footer;
