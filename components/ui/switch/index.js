import React from "react";
import styles from "./styles.module.scss";

const customSwitch = ({ ...props }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" {...props} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default customSwitch;
