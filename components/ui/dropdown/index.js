import React from "react";
import styles from "./styles.module.scss";

const dropdown = ({
  wrapperClass,
  btnText,
  clicked,
  show,
  children,
  isDrop,
  ...props
}) => {
  return (
    <div
      className={`${styles.dropdown} ${wrapperClass ? wrapperClass : ""}`}
      {...props}
    >
      <button
        type="button"
        onClick={clicked}
        className={`${isDrop ? styles.darkText : ""}`}
      >
        <span>{btnText}</span>
        <i className="far fa-chevron-down"></i>
      </button>

      <div
        className={`${styles.dropmenu} ${show ? styles.open : ""}`}
        id="dropdown-menu"
      >
        <ul onClick={(e) => e.stopPropagation()}>{children}</ul>
      </div>
    </div>
  );
};

export default dropdown;
