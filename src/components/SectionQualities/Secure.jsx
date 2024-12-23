import { FaCircleInfo } from "react-icons/fa6";
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
    <section className="w-full flex flex-col items-center">
      <h2 className="font-semibold text-customGrayLight text-[1.7rem] leading-8 text-center">
        navega con el antivirus
        <span className="text-customGreen font-bold">más seguro</span>
      </h2>
      <div className="flex items-center justify-center space-x-5 mt-5">
        {optionsSecure.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center h-[7rem] max-w-[8rem] border border-customGreen rounded-[10%] ssm:w-[12rem] py-3 hover:bg-customGreen hover:border-customGreen hover:text-white transform duration-200 group"
          >
            <figure className="text-[2rem] text-customGreen group-hover:text-white">
              {item.icon}
            </figure>
            <span className="text-customGrayLight text-[1.1rem] font-medium inline-block text-center leading-6 mt-2 group-hover:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center mt-5 gap-2">
        <FaCircleInfo color="rgb(38,133,59)" />
        <span className="inline-block text-customGrayLight text-[1.3rem]">
          protege toda tu información en un solo lugar
        </span>
      </div>
    </section>
  );
};
