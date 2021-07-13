import React from "react";
import styles from "./courselist.module.scss";

const linkList = [
  "Sitemap",
  "Blog Sitemap",
  "City Sitemap",
  "Community Sitemap",
];

const Sitemaps = () => {
  const listItems = linkList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <div>
      <h3 className={styles.heading}>SITEMAPS</h3>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default Sitemaps;
