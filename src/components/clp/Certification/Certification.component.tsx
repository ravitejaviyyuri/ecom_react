import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./certification.module.scss";

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
    <section className={styles.certification_section}>
      <Container>
        <Row className={styles.row}>
          <Col xs={12} sm={12} md={6}>
            {!isMob && (
              <div className={styles.heading}>
                Big Data Hadoop Certification
              </div>
            )}
            <div className={styles.sub_heading}>
              Edureka’s DevOps Engineer Certificate Holders work at 1000s of
              companies like
            </div>
            <div className={styles.icons}>
              <img src="/microsoft_cl.svg" alt="Microsoft Color Logo" />
              <img src="/google_cl.svg" alt="Google Color Logo" />
              <img src="/citi_cl.svg" alt="Citi Color Logo" />
              <img src="/facebook_cl.svg" alt="Facebook Color Logo" />
              <img src="/flipkart_cl.svg" alt="Flipkart Color Logo" />
            </div>
            <Button className={styles.sample_certificate_btn}>
              GET A SAMPLE CERTIFICATE
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6}>
            {isMob && (
              <div className={styles.heading}>
                Big Data Hadoop Certification
              </div>
            )}
            <img src="" alt="Sample Certificate" />
            <div className={styles.zoom}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.29"
                height="20.891"
                viewBox="0 0 21.29 20.891"
              >
                <g
                  id="Group_10755"
                  data-name="Group 10755"
                  transform="translate(14838.037 1118.363)"
                >
                  <g id="Group_10753" data-name="Group 10753">
                    <path
                      id="Path_24561"
                      data-name="Path 24561"
                      d="M187.953,421.427a8.782,8.782,0,1,0-1.8,1.9l5.2,5.2,1.9-1.9Zm-7.2,2a6.9,6.9,0,1,1,6.9-6.9,6.913,6.913,0,0,1-6.9,6.9"
                      transform="translate(-15010 -1526)"
                      fill="#192f60"
                    />
                    <path
                      id="Path_24562"
                      data-name="Path 24562"
                      d="M181.713,415.722v-3.4h-1.9v3.4h-3.4v1.9h3.4v3.4h1.9v-3.4h3.4v-1.9Z"
                      transform="translate(-15010 -1526)"
                      fill="#192f60"
                    />
                  </g>
                </g>
              </svg>
              Click to enlarge
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EdurekaAdvantage;
