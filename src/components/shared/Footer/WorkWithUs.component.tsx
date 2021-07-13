import React from "react";
import styles from "./courselist.module.scss";

const linkList = [
  "Careers",
  "Become an Instructor",
  "Become an Affiliate",
  "Become a Partner",
  "Hire from Edureka",
];

const WorkWithUs = () => {
  const listItems = linkList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <div>
      <h3 className={styles.heading}>WORK WITH US</h3>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default WorkWithUs;
