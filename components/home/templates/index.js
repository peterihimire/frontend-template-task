import React from "react";
import styles from "./styles.module.scss";
import Card from "../../ui/card";
import Pagination from "../../ui/pagination";

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
        <div className={styles.gridPaginate}>
          <Pagination
            pageCount={17}
            containerClassName='pagination'
            activeClassName='paginate-active'
            disabledClassName='paginate-disabled'
            previousClassName='paginate-previous'
            nextClassName='paginate-next'
            breakLabel='...'
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Templates;
