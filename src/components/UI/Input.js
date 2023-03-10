import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      className='form-control
  block
  w-full
  px-1
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  mb-3
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"'
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
