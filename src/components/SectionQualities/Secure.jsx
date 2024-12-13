import { serializeActionResult } from "astro:actions";
import { GoBrowser } from "react-icons/go";
import { GrSecure } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Secure = () => {
  const optionsSecure = [
    {
      icon: <GoBrowser />,
      title: "navega seguro",
    },
    {
      icon: <GrSecure />,
      title: "protege tu informacion",
    },
    {
      icon: <RiSecurePaymentLine />,
      title: "pagos seguros",
    },
  ];

  return (
    <section className="w-full">
      <h2 className="font-semibold text-customGrayLight text-[1.7rem] leading-8 text-center">
        ¿Qué te ofrece
        <span className="text-customGreen font-bold"> cosmos?</span>
      </h2>
      <div className="flex items-center justify-center space-x-5 mt-5">
        {optionsSecure.map((item) => (
          <div key={item.title} className="flex flex-col items-center h-[7rem] max-w-[8rem] border border-customGreen rounded-[10%] ssm:w-[12rem] py-3 hover:bg-customGreen hover:border-customGreen hover:text-white transform duration-200 group">
            <figure className="text-[2rem] text-customGreen group-hover:text-white">{item.icon}</figure>
            <span className="text-customGrayLight text-[1.1rem] font-medium inline-block text-center leading-6 mt-2 group-hover:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <p className="text-customGrayLight text-center pt-4">protege toda tu información en un solo lugar</p>
    </section>
  );
};
