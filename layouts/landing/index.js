import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/ui/header";
import Backdrop from "../../components/ui/backdrop";
// import Footer from "../../components/ui/footer";
import { useRouter } from "next/router";

const LandingLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className={styles.layout}>
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className={styles.main}>{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingLayout;
