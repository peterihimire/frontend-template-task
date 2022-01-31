import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
// import ProgressBar from "@ramonak/react-progress-bar";

const DashboardCard = ({ title, info, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{info}</p>

        <div className={styles.cardFooter}>
          <Link href={link}>
            <a>Use Template</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
