import { PiLinuxLogo } from "react-icons/pi";
import { RiAppleLine } from "react-icons/ri";
import { AiOutlineWindows } from "react-icons/ai";
import { CiMobile1 } from "react-icons/ci";

export const OptionCompatible = () => {

    const OptionsCompatible = [
        {
            icon: <PiLinuxLogo />,
            title: 'Linux',
        },
        {
            icon: <RiAppleLine />,
            title: 'Mac',
        },
        {
            icon: <AiOutlineWindows />,
            title: 'Windows',
        },
        {
            icon: <CiMobile1 />,
            title: 'Mobile',
        }
    ]

  return (
    <div className="flex gap-4 mt-3">
        { OptionsCompatible.map((item) => (
            <div key={item.title} className='group flex border ssm:w-[4.3rem] sm:w-[6rem] sm:h-[5rem] sm:text-[1.3rem] md:w-[8rem] md:h-[9rem] ssm:pt-[.8rem] ssm:px-[1rem] rounded-[10%] border-customGray flex-col items-center hover:bg-customGreen transform duration-200 hover:border-customGreen hover:text-white group'>
                <figure className="md:text-[5rem] text-customGrayLight hover:text-white group-hover:text-white">
                    {item.icon}
                </figure>
                <span className=' inline-block text-customGrayLight group-hover:text-white'>{item.title}</span>
            </div>
        ))}
    </div>
  )
}
