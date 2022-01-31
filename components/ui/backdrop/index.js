import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const backdrop = ({ open, clicked }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
    document.body
  );
};

export default backdrop;
