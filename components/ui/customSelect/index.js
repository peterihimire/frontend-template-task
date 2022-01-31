import React from "react";

const Select = ({ labelText, children, id, required, wrapClass, ...props }) => {
  return (
    <>
      <div className={`select-wrapper ${wrapClass ? wrapClass : ""} `}>
        {labelText && <label htmlFor={id}>{labelText}</label>}
        <select {...props} id={id} required={required}>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
