import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { SearchIcon } from "../../icons/searchicon";
import styles from "./searchinput.module.scss";
import SearchResult from "./SearchResult.component";


//const searchClient = algoliasearch('testing9DFZ2ODF33','0ae09568a97f143707a7158a5c6de789');


const SearchInput = (props: any) => {

  
  const onChangeHandler = (event: any) =>{
     console.log(event.target.value);
     props.setSearchInput(event.target.value);
  }

  return (
    <div className={styles.search_bx}>
      <Container>
        <div className={styles.input_bx}>
          <input
             name="search"
             onChange={onChangeHandler} 
            className={styles.input}
            type="text"
            placeholder="Enter Course, Category or keyword"
          />
          <span className={styles.search_icon}>
            <SearchIcon color="#5a6484" />
          </span>
          {props.isResult && <SearchResult hits={props.hits}/>}
        </div>
      </Container>
    </div>
  );
};

export default SearchInput;
