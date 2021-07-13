import React from "react";
import styles from "./courselist.module.scss";

const linkList = [
  "Contact Us",
  "Locations",
  "Terms & Conditions",
  "Privacy Policy",
];

const Support = () => {
  const listItems = linkList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <div>
      <h3 className={styles.heading}>SUPPORT</h3>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default Support;
