import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import styles from "./reviews.module.scss";
import Testimonials from "./Testimonials.component";
import VideoReviews from "./VideoReview.component";
import Ratings from "./Ratings.component";

const Reviews = () => {
  const [activeTab, setActive] = useState<string>("testimonial");

  const handleClick = (tab: string) => {
    setActive(tab);
  };

  return (
    <section className={styles.review_section}>
      <Container>
        <Row>
          <div className={styles.heading}>
            Check what our Learner’s have to say
          </div>
          <Col xs={12}>
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-row justify-content-center align-items-center"
                  >
                    <div className={styles.selector_container}>
                      <Nav.Item>
                        <Nav.Link
                          className={styles.nav_link}
                          eventKey="first"
                          onClick={() => {
                            handleClick("testimonial");
                          }}
                        >
                          Testimonials
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          className={styles.nav_link}
                          eventKey="second"
                          onClick={() => {
                            handleClick("video");
                          }}
                        >
                          Video Reviews
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </Nav>
                </Col>
                <Col sm={12} className={styles.tab_col}>
                  <Tab.Content className={styles.tab_content}>
                    <Tab.Pane eventKey="first">
                      <Testimonials activeTab={activeTab} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <VideoReviews activeTab={activeTab}/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col xs={12}>
            <Ratings />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
