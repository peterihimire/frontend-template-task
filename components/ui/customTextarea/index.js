import React from "react";

const Textarea = ({ labelText, children, id, required, clicked, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <textarea {...props} id={id} required={required}></textarea>
    </>
  );
};

export default Textarea;
