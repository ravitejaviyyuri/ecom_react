import React from "react";
import styles from "./searchresult.module.scss";

const SearchResult = (props: any) => {
  
  const items = props.hits.map(( data:any, index:number) =>
      <li key={index}><a href= {"\\" + `${data.slug}`} >{data.title}</a></li>
  )

  return <div className={styles.result_bx}>
      <ul>
         {items}
      </ul>
  </div>;
};

export default SearchResult;
