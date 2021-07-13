import React from "react";
import styles from "./courselist.module.scss";

const trendingList = [
  "DevOps Certification Training",
  "AWS Architect Certification Training",
  "Big Data Hadoop Certification Training",
  "Tableau Training & Certification",
  "Python Certification Training for Data Science",
  "Selenium Certification Training",
  "PMP® Certification Exam Training",
  "Robotic Process Automation Training using UiPath",
  "Apache Spark and Scala Certification Training",
  "Microsoft Power BI Training",
  "Online Java Course and Training",
  "Python Certification Course",
];

const TrendingCertificationCourses = () => {
  const listItems = trendingList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <div>
      <h3 className={styles.heading}>TRENDING CERTIFICATION COURSES</h3>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default TrendingCertificationCourses;
