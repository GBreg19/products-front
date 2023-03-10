import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-hamBlue text-white py-1 px-3 rounded-md font-robotoBold text-lg hover:bg-hamLightBlue ease-in duration-300"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
