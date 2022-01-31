import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
 

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id='navbar'>
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink name='Home' href='/' linkClass={`${styles.darkText}`} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
