import { FaCircleInfo } from "react-icons/fa6";

import { OptionCompatible } from "../common/OptionCompatible";

export const Compatible = () => {
  return (
    <section className="leading-9 flex flex-col items-center">
      <h2 className="text-[1.7rem] font-semibold text-customGrayLight leading-8 text-center">
        lleva cosmos<span className="text-customGreen"> a todos lados</span>
      </h2>
      <OptionCompatible />
      <div className="flex flex-row items-center mt-5 gap-2">
        <FaCircleInfo color="rgb(38,133,59)" />
        <span className="inline-block text-customGrayLight text-[1.3rem]">
          compatible con todos los dispositivos
        </span>
      </div>
    </section>
  );
};
