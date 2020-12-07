import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./learnedu.module.scss";
import { TickCircleIcon } from "../../shared/icons/tickcircleicon";

const LearningByEdureka = ({course_section}:any) => {

  const edureka360degSection = course_section.section_details;
  const formattedData: any = edureka360degSection.map((value: any) => {
    const title = value.subsection_title;
    const parsedValue = JSON.parse(value.subsection_content);
    const cardImageName = parsedValue.card_image_name;
    const dataPoints = JSON.parse(parsedValue.data);
    return {
      title,
      cardImageName,
      dataPoints
    }
  });
  return (
    <section className={styles.LearningEdu_section}>
      <Container>
        <div className={styles.section_title}>
          The Future of Learning is Here - 360° Learning by Edureka
        </div>
        <Row>
          {formattedData.map((card: any, index:any) => {
            card.cardImageName = "/" + card.cardImageName;
            return (
              <Col key={String(index)}>
                <Card  className={styles.card_over}>
                  <div className={styles.card_img}>
                    <Image
                      src={card.cardImageName}
                      width="166"
                      height="99"
                      loading="lazy"
                      alt = "card Image"
                    />
                  </div>
                  <Card.Body className="p-0">
                    <Card.Title className={styles.card_title}>
                      {card.title}
                    </Card.Title>
                    <div>
                      <ul>
                        {card.dataPoints.map((value: any, index : any) => {
                          return (<li key={index}>
                            <TickCircleIcon color="#36b37e" />
                            {value}
                          </li>);
                        })}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default LearningByEdureka;
