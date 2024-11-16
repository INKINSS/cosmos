import React from "react";

const Anchor = ({ label, href }) => {
  return (
    <li className="flex justify-end py-2 pr-5 hover:bg-customGreen hover:text-white transform duration-100 md:hover:bg-white md:hover:text-black md:duration-0">
      <a className="text-[1.3rem]" href={href}>
        {label}
      </a>
    </li>
  );
};

export default Anchor;
