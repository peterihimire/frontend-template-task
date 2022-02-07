import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import SearchIcon from "../../../public/images/search-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";

const SearchSort = () => {
  const dispatch = useDispatch();
  console.log(actions);

  const filterByInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    // let text = e.target.value;
    console.log(input);
    dispatch(actions.filterByValue({ value: input }));
  };

  const sortByInputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    // let text = e.target.value;
    // dispatch(actions.searchCareersLocation({ ...field }));
    // dispatch(actions.filterByValue({value}));

    if (value.startsWith("education")) {
      dispatch(actions.sortByEducation({ value }));
    } else if (value.startsWith("health")) {
      dispatch(actions.sortByHealth({ value }));
    } else if (value.startsWith("ecommerce")) {
      dispatch(actions.sortByEcommerce({ value }));
    } else {
      dispatch(actions.loadData());
    }

    console.log(value);
  };

  return (
    <section className={styles.searchSort}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.left}>
          <Input
            type='text'
            name='search'
            id='search'
            children={<SearchIcon />}
            innerLabel='search'
            placeholder='Search Templates'
            clicked={() => {
              console.log("Hello inner-label clicked");
            }}
            wrapperClass={styles.inputWidth}
            onChange={filterByInput}
          />
        </div>
        <div className={styles.right}>
          <p>Sort By:</p>
          <span>
            <Select
              name='category'
              id='category'
              labelText='Category'
              // required
              id='category'
              defaultValue=''
              wrapClass={styles.selectWidth}
              onChange={sortByInputHandler}
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
              onChange={sortByInputHandler}
            >
              <option value='default'>Default</option>
              <option value='order_asc'>Order - A-Z</option>
              <option value='order_desc'>Order - Z-A</option>
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
              onChange={sortByInputHandler}
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
