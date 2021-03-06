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
  // let list_items = course_sections.section_details.map((value: any) => {
  //    value_content  = JSON.parse(value.subsection_content);
     let items = course_sections.value_content.points.map((point: any, index: number) =>{
      return (<li key ={index} >
      <div>
        <TickCircleIcon color="#36b37e" />
      </div>
      {point}
    </li>)
    
     })
  //    return items;
  // }
 
  return (
    <section className={styles.ice_section}>
      <Container>
        <Row>
          <Col className={styles.ice_card}>
            <Row className={styles.row}>
              <Col className={styles.details_section}>
                <div className={styles.heading}>{course_sections.section_title}</div>
                <div className={styles.info}>
                  {course_sections.value_content.icedescription}
                </div>
                <ul className={styles.list}>
                  {items}
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
