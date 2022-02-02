import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import SearchIcon from "../../../public/images/search-icon.svg";

const SearchSort = () => {
  return (
    <section className={styles.searchSort}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <Input
            children={<SearchIcon />}
            innerLabel='templates'
            placeholder='Search Templates'
            clicked={() => {
              console.log("Hello inner-label clicked");
            }}
            wrapperClass={styles.inputWidth}
          />
        </div>
        <div className={styles.right}>
          <p>Sort By:</p>
          <span>
            <Select
              name='category'
              labelText='Category'
              // required
              id='category'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='all'>All</option>
              <option value='education'>Education</option>
              <option value='ecommerce'>E-Commerce</option>
              <option value='health'>Health</option>
            </Select>
          </span>
          <span>
            <Select
              name='order'
              labelText='Order'
              // required
              id='order'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='default'>Default</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
            </Select>
          </span>
          <span>
            <Select
              name='date'
              labelText='Date'
              // required
              id='date'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='default'>Default</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
            </Select>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchSort;
