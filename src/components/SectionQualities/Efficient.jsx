import { Charts } from "../common/Charts";

export const Efficient = () => {
  return (
    <section className="px-10 space-y-10">
        <h2 className="font-semibold text-customGrayLight text-[1.7rem] leading-8 text-center">el antivirus mas popular en los ultimos meses</h2>
        <div className="flex items-center gap-8">
            <Charts />
            <span className="ssm:hidden md:block font-semibold text-[1.3rem] text-customGrayLight">con mas de 100k descargas por mes,<span className="text-customGreen">cosmos ha sido el antivirus más popular del año</span></span>
        </div>
    </section>
  )
};
