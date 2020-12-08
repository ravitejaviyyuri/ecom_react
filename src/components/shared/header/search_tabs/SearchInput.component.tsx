import React from "react";
import Container from "react-bootstrap/Container";
import { SearchIcon } from "../../icons/searchicon";
import styles from "./searchinput.module.scss";

const SearchInput = (props: any) => {
  return (
    <div className={styles.search_bx}>
      <Container>
        <div className={styles.input_bx}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Course, Category or keyword"
          />
          <span className={styles.search_icon}>
            <SearchIcon color="#ffffff" />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default SearchInput;
