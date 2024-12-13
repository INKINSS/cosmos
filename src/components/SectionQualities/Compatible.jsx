import React from "react";
import { OptionCompatible } from "../common/OptionCompatible";

export const Compatible = () => {
  return (
    <section className="leading-9 flex flex-col items-center">
      <h2 className="font-semibold text-[2rem] text-customGrayLight">
        lleva cosmos
      </h2>
      <span className="text-customGreen text-[2.3rem] font-bold">
        a todo lado
      </span>
      <OptionCompatible />
      <span className="text-customGrayLight mt-5">
        compatible con todos los dispositivos
      </span>
    </section>
  );
};
