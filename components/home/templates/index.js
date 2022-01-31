import React from "react";
import styles from "./styles.module.scss";
import Card from "../../ui/card";

const Templates = () => {
  return (
    <section className={styles.searchSort}>
      <div className={`${styles.wrapper} wrapper`}>
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
