import { FaWeightHanging } from "react-icons/fa";

export const Light = () => {
  return (
    <section className="px-10 space-y-10">
      <h2 className="font-semibold text-customGrayLight text-[1.7rem] leading-8 text-center">
        creado para correr
        <span className="text-customGreen font-bold">
          {" "}
          con el minimo de espacio
        </span>
      </h2>
      <div className="flex items-center gap-4">
        <FaWeightHanging
          className="ssm:text-[10rem] h-auto max-w-[7rem]"
          color="rgb(38,133,59)"
        />
        <span className="text-customGrayLight text-[1.3rem] font-semibold">
          máxima protección sin ocupar espacio en
          <span className="text-customGreen"> tu dispositivo</span>
        </span>
      </div>
    </section>
  );
};
