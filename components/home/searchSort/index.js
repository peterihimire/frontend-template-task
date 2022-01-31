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
              name='gender'
              labelText='Category'
              // required
              id='template'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='' disabled>
                All
              </option>
              <option value='nig'>Education</option>
              <option value='gh'>Agriculture</option>
            </Select>
          </span>
          <span>
            <Select
              name='gender'
              labelText='Order'
              // required
              id='order'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='' disabled>
                Default
              </option>
              <option value='nig'>Education</option>
              <option value='gh'>Agriculture</option>
            </Select>
          </span>
          <span>
            <Select
              name='date'
              labelText='Date'
              // required
              id='template'
              defaultValue=''
              wrapClass={styles.selectWidth}
            >
              <option value='' disabled>
                Default
              </option>
              <option value='nig'>Education</option>
              <option value='gh'>Agriculture</option>
            </Select>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchSort;
