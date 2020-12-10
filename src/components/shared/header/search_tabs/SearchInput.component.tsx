import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { SearchIcon } from "../../icons/searchicon";
import styles from "./searchinput.module.scss";
import SearchResult from "./SearchResult.component";

const SearchInput = (props: any) => {
  const [isResult, setResult] = useState(false);
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
          {isResult && <SearchResult />}
        </div>
      </Container>
    </div>
  );
};

export default SearchInput;
