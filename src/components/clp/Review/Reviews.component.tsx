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
type  Props = {
  rating_section: any;
  review_section: any;
}

const Reviews = ({rating_section, review_section}: Props) => {
  const [activeTab, setActive] = useState<string>("testimonial");

  const handleClick = (tab: string) => {
    setActive(tab);
  };
  // let platform_ratings: any;
  // rating_section.section_details.forEach((data: any, index: Number) => {
  //   if(index == 0 )
  //      platform_ratings = data.subsection_content;
  // })
  // let ratings = JSON.parse(platform_ratings);
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
                      <Testimonials activeTab={activeTab} testimonials={review_section.reviews}    />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <VideoReviews activeTab={activeTab}  videoReviews= {review_section.video_reviews}/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col xs={12}>
            <Ratings  ratings={rating_section}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
