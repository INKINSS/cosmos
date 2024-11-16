import React from "react";

const Anchor = ({ label, href }) => {
  return (
    <li className="flex justify-end">
      <a className="text-[1.3rem]" href={href}>
        {label}
      </a>
    </li>
  );
};

export default Anchor;
