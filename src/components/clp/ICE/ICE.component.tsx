import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ice.module.scss";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";
type Props = {
  course_sections: any
}
const ICE = ({course_sections}: Props) => {

  let ice_content = JSON.parse(course_sections.section_details[0].subsection_content);
  return (
    <section className={styles.ice_section}>
      <Container>
        <Row>
          <Col className={styles.ice_card}>
            <Row className={styles.row}>
              <Col className={styles.details_section}>
                <div className={styles.heading}>{course_sections.section_title}</div>
                <div className={styles.info}>
                  {ice_content[0].icedescription}
                </div>
                <ul className={styles.list}>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                  {ice_content[0].Bullets[0]}

                  </li>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                    {ice_content[0].Bullets[1]}
                  </li>
                  <li>
                    <div>
                      <TickCircleIcon color="#36b37e" />
                    </div>
                    {ice_content[0].Bullets[2]}
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
