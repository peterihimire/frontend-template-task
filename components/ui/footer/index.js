import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo-light.svg";
import Input from "../customInputWithIcon";
import ActiveLink from "../../../hoc/activeLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.first}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p>32 Heywhy address, 39th Floor Washing, DC 20038</p>
        </div>
        <div className={styles.second}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <Input
                type="email"
                id="email"
                // required
                name="email"
                placeholder="Join the waiting list (Your email)"
                src="/images/send-icon.svg"
                alt=""
                loading="lazy"
              />
            </div>
          </form>
        </div>
        <div className={styles.last}>
          <div className={styles.storeIcon}>
            <img alt="" loading="lazy" src="/images/apple-store-grey.svg" />
          </div>
          <div className={styles.storeIcon}>
            <img alt="" loading="lazy" src="/images/google-store-grey.svg" />
          </div>
        </div>
      </div>
      <div className={styles.outro}>
        <div className={styles.socials}>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className={styles.copyright}>
          <span>© 2021 KoboTree Technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
