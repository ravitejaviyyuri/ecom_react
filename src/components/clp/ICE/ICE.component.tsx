import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ice.module.scss";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const ICE = () => {
  return (
    <section className={styles.ice_section}>
      <Container>
        <Row>
          <Col className={styles.ice_card}>
            <Row className={styles.row}>
              <Col className={styles.details_section}>
                <div className={styles.heading}>Edureka ICE</div>
                <div className={styles.info}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et.
                </div>
                <ul className={styles.list}>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                    Immersive Classroom experience
                  </li>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                    Instant doubt clearing
                  </li>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                    Instructor-led Sessions
                  </li>
                </ul>
              </Col>
              <Col className={styles.img_section}>
                <Image
                  src="/ice-img.png"
                  alt="ICE-img"
                  width={522}
                  height={351}
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ICE;
