import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./edurekaadvantage.module.scss";
import OpenForm from "../OpenForm/OpenForm.component";
import { LiveClassSliderIcon } from "../../shared/icons/liveclassslidericon";
import { CrossCircleIcon } from "../../shared/icons/crosscircle";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const advantageData = [
  {
    title: "Live and interactive classroom experience",
    others: "Recorded videos without any interaction with the instructor",
    edureka: "Live instructor-led online classes by industry experts",
  },
  {
    title: "Live and interactive classroom experience",
    others: "Recorded videos without any interaction with the instructor",
    edureka: "Live instructor-led online classes by industry experts",
  },
  {
    title: "Live and interactive classroom experience",
    others: "Recorded videos without any interaction with the instructor",
    edureka: "Live instructor-led online classes by industry experts",
  },
  {
    title: "Live and interactive classroom experience",
    others: "Recorded videos without any interaction with the instructor",
    edureka: "Live instructor-led online classes by industry experts",
  },
  {
    title: "Live and interactive classroom experience",
    others: "Recorded videos without any interaction with the instructor",
    edureka: "Live instructor-led online classes by industry experts",
  },
];

const EdurekaAdvantage = () => {
  const [isMob, setMob] = useState(false);
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);
  return (
    <section className={styles.advantage_section}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} className={styles.heading}>
            The Edureka Advantage
          </Col>
        </Row>
        <Row className="m-0">
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.blue}`}
          >
            {" "}
            WHAT I NEED
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.red}`}
          >
            WHAT OTHERS OFFERS
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.green}`}
          >
            EDUREKA ADVANTAGE
          </Col>
        </Row>
        {advantageData.map((value: any, index: number) => {
          return (
            <Row key={index} className={styles.cell_row}>
              <Col xs={12} sm={12} md={4} className={styles.cell}>
                <div className={styles.liveclass_icon}>
                  <LiveClassSliderIcon color="#192f60" />
                </div>
                <div className={styles.title_text}>{value.title}</div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                className={`${styles.cell} ${styles.light_red}`}
              >
                <div className={styles.icon}>
                  <CrossCircleIcon color="#ff5630" />
                </div>
                <div className={styles.text}>{value.others}</div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                className={`${styles.cell} ${styles.light_green}`}
              >
                <div className={styles.icon}>
                  <TickCircleIcon color="#36b37e" />
                </div>
                <div className={styles.text}>{value.edureka}</div>
              </Col>
            </Row>
          );
        })}
        <Row className={styles.cell_row_last}>
          <Col xs={12} sm={12} md={4} className={styles.cell}></Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.cell} ${styles.light_red}`}
          ></Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.cell} ${styles.light_green}`}
          ></Col>
        </Row>
      </Container>
      <div className={styles.open_form_container}>
        <OpenForm />
        <div className={styles.img}>
          <Image
            width={132}
            height={95}
            loading="lazy"
            src={isMob ? `/future2.png` : `/future1.png`}
            alt="be future"
          />
        </div>
      </div>
    </section>
  );
};

export default EdurekaAdvantage;
