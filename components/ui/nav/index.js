import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);


  const router = useRouter();

  // useEffect(() => {
  //   openAbout(false);
  //   openServices(false);
  //   openIndustries(false);
  // }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isOpen) {
  //     openAbout(false);
  //     openServices(false);
  //     openIndustries(false);
  //   }
  // }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink
            name="How it works"
            href="/"
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name="FAQs"
            href="/faq"
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name="About Us"
            href="/about-us"
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name="Contact Us"
            href="/contact-us"
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.login}>
          <Link href="/login">
            <a
              className={`${
                isOpen ||
                bgChange ||
                router.pathname === "/contact-us" ||
                router.pathname === "/about-us" ||
                router.pathname === "/faq"
                  ? "btn-transparent-dark btn-login"
                  : "btn-transparent btn-login"
              }`}
            >
              Log In
            </a>
          </Link>
        </div>
        <div className={styles.create}>
          <Link href="/register">
            <a className="btn-primary btn-medium">Create an account</a>
          </Link>
        </div>
        {/* <div className={styles.searchBtn}>
          <button className={`${isDrop ? styles.darkText : ""}`}>
            <i className="far fa-search"></i>
          </button>
        </div> */}
        {/* <Dropdown
          btnText="EN"
          isDrop={isDrop}
          show={showLang}
          clicked={(e) => {
            e.stopPropagation();

            setShowLang(!showLang);
          }}
        ></Dropdown> */}
      </div>
    </nav>
  );
};

export default Nav;
