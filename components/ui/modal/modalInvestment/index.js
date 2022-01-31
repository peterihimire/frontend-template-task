import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";
import { CloseOutlined } from "@ant-design/icons";

const Modal = ({ children, click, header, bodyClass, ...props }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={click}>
      <div
        className={`${styles.modalBody} ${bodyClass ? bodyClass : ""}`}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{header}</h2>

        <div className={styles.cancel}>
          <button onClick={click}>
            {/* <CloseOutlined /> */}
            <img src="/images/Close.svg" alt="" />
          </button>
        </div>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
