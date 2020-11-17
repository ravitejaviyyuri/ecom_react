import React from "react";
import styles from "./courselist.module.scss";

const linkList = [
  "About",
  "News & Media",
  "Reviews",
  "Blog",
  "Community",
  "Corporate Training",
];

const EdurekaLinks = () => {
  const listItems = linkList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <div>
      <h3 className={styles.heading}>EDUREKA</h3>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default EdurekaLinks;
