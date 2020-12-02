import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ice.module.scss";
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                      >
                        <path
                          id="Path_24541"
                          data-name="Path 24541"
                          d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                          fill="#36b37e"
                        />
                      </svg>
                    </div>
                  {ice_content[0].Bullets[0]}

                  </li>
                  <li>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                      >
                        <path
                          id="Path_24541"
                          data-name="Path 24541"
                          d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                          fill="#36b37e"
                        />
                      </svg>
                    </div>
                    {ice_content[0].Bullets[1]}
                  </li>
                  <li>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                      >
                        <path
                          id="Path_24541"
                          data-name="Path 24541"
                          d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0M9.9,18.1,4.8,13l1.4-1.4,3.7,3.7,8.5-8.5,1.4,1.4Z"
                          fill="#36b37e"
                        />
                      </svg>
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
