import React from "react";
import styles from "./styles.module.scss";
import Card from "../../ui/card";

const Templates = () => {
  return (
    <section className={styles.searchSort}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.searchInfo}>
          <img src='images/info-icon.svg' alt='' />{" "}
          <span>
            Tada! Get started with a free template. Can't find what you are
            looking for? Search from the 1000+ available templates
          </span>
        </div>
        <div className={styles.categoryInfo}>
          <h3>All Templates</h3> <span>2000 templates</span>
        </div>
        <div className={styles.grid}>
          <Card
            title='Alumni Membership Form Template'
            info='Engage your alumni network better with this alumni registration form template. Embed this in your website ...'
            link='/'
          />
          <Card
            title='Alumni Membership Form Template'
            info='Engage your alumni network better with this alumni registration form template. Embed this in your website ...'
            link='/'
          />
          <Card
            title='Alumni Membership Form Template'
            info='Engage your alumni network better with this alumni registration form template. Embed this in your website ...'
            link='/'
          />
          <Card
            title='Alumni Membership Form Template'
            info='Engage your alumni network better with this alumni registration form template. Embed this in your website ...'
            link='/'
          />
        </div>
      </div>
    </section>
  );
};

export default Templates;
