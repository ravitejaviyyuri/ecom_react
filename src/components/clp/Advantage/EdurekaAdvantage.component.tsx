import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./edurekaadvantage.module.scss";
import OpenForm from "../OpenForm/OpenForm.component";
type Props = {
  course_sections: any;
}
// const advantageData = [
//   {
//     title: "Live and interactive classroom experience",
//     others: "Recorded videos without any interaction with the instructor",
//     edureka: "Live instructor-led online classes by industry experts",
//   },
 
const EdurekaAdvantage = ({course_sections}: Props) => {
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
  let section_data = JSON.parse(course_sections.section_details[0].subsection_content)
  return (
    <section className={styles.advantage_section}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} className={styles.heading}>
            {course_sections.section_title}
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
            {section_data[0].description}
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.red}`}
          >
            {section_data[1].description}
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.green}`}
          >
            {section_data[2].description}
          </Col>
        </Row>
        {section_data[0].Bullets.map((value: any, index: number) => {
          return (
            <Row key={index} className={styles.cell_row}>
              <Col xs={12} sm={12} md={4} className={styles.cell}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42.7"
                    height="34.452"
                    viewBox="0 0 42.7 34.452"
                  >
                    <g
                      id="Group_10757"
                      data-name="Group 10757"
                      transform="translate(14931.613 1114.832)"
                    >
                      <path
                        id="Path_24565"
                        data-name="Path 24565"
                        d="M118.887,436.168h-38.3a2.22,2.22,0,0,1-2.2-2.2v-20.6a2.22,2.22,0,0,1,2.2-2.2h38.3a2.22,2.22,0,0,1,2.2,2.2v20.6a2.289,2.289,0,0,1-2.2,2.2m-38.3-23.2a.43.43,0,0,0-.4.4v20.6a.43.43,0,0,0,.4.4h38.3a.43.43,0,0,0,.4-.4v-20.6a.43.43,0,0,0-.4-.4Z"
                        transform="translate(-15010 -1526)"
                        fill="#192f60"
                      />
                      <path
                        id="Path_24566"
                        data-name="Path 24566"
                        d="M95.172,430.357a1.02,1.02,0,0,1-.5-.8v-11.8a.9.9,0,0,1,.9-.9.765.765,0,0,1,.5.2l8.3,5.9a.832.832,0,0,1,.2,1.2c-.1.1-.1.2-.2.2l-8.3,5.9a.635.635,0,0,1-.9.1m1.3-10.8v8.4l5.9-4.2Z"
                        transform="translate(-15010 -1526)"
                        fill="#192f60"
                      />
                      <path
                        id="Path_24567"
                        data-name="Path 24567"
                        d="M120.187,441.2h-16.8a3.43,3.43,0,0,0-4.2-2.5,3.512,3.512,0,0,0-2.5,2.5h-17.3a.9.9,0,1,0,0,1.8h17.3a3.429,3.429,0,0,0,4.2,2.5,3.509,3.509,0,0,0,2.5-2.5h16.8a.9.9,0,0,0,.9-.9c-.1-.5-.4-.9-.9-.9m-20.2,2.6a1.7,1.7,0,1,1,0-3.4,1.752,1.752,0,0,1,1.7,1.7,1.685,1.685,0,0,1-1.7,1.7"
                        transform="translate(-15010 -1526)"
                        fill="#192f60"
                      />
                    </g>
                  </svg>
                </div>
                <div className={styles.title_text}>{section_data[0].Bullets[index]}</div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                className={`${styles.cell} ${styles.light_red}`}
              >
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      id="Path_24542"
                      data-name="Path 24542"
                      d="M37.3,57.2A12.5,12.5,0,1,0,49.8,69.7,12.505,12.505,0,0,0,37.3,57.2m5.8,16.9-1.4,1.4-4.1-4.1-4.1,4.1-1.4-1.4L36.2,70l-4.1-4.1,1.4-1.4,4.1,4.1,4.1-4.1,1.4,1.4L39,70Z"
                      transform="translate(-24.799 -57.2)"
                      fill="#ff5630"
                    />
                  </svg>
                </div>
                <div className={styles.text}>{section_data[1].Bullets[index]}</div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                className={`${styles.cell} ${styles.light_green}`}
              >
                <div className={styles.icon}>
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
                <div className={styles.text}>{section_data[2].Bullets[index]}</div>
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
        <img src={isMob ? `/future2.png` : `future1.png`} alt="be future" />
      </div>
    </section>
  );
};

export default EdurekaAdvantage;
