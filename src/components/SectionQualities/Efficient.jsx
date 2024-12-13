import { IoTimer } from "react-icons/io5";
import { Charts } from "../common/Charts";

export const Efficient = () => {
  return (
    <section className="px-10 space-y-10">
        <h2 className="font-semibold text-customGrayLight text-[1.7rem] leading-8 text-center">creado para correr <span className="text-customGreen font-bold">sin que te des cuenta</span></h2>
        <div className="flex items-center">
            <IoTimer className="ssm:text-[15rem] max-w-[9rem] h-auto" color="rgb(38,133,59)" />
            <span className="text-customGrayLight text-[1.3rem] font-semibold">detecta amenazas en segundos sin comprometer la <span className="text-customGreen">velocidad de tu dispositivo</span></span>
            <Charts />
        </div>
    </section>
  )
};
