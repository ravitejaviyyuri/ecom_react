import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./othercity.module.scss";

const linkList = [
  "Bangalore",
  "Mumbai",
  "Pune",
  "Ahmedabad",
  "Ahmedabad",
  "Bangalore",
];

const OtherCityLinks = () => {
  const listItems = linkList.map((value: any, index: number) => {
    return (
      <li key={index}>
        <a href={`/${value}`}>{value}</a>
      </li>
    );
  });
  return (
    <section className={styles.city_section}>
      <Container>
        <Row>
          <Col xs={12} className={styles.heading}>
            Find AWS Architect Certification Training in other cities
          </Col>
          <Col xs={12} className={styles.list}>
            <ul>{listItems}</ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OtherCityLinks;
