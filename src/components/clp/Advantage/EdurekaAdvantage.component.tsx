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
  type advanatge = { title: any;
   other: any;
   edureka: any;
};
 let advantages_arr: advanatge = {title: "", other: "", edureka:""};
  course_sections.section_details.map((data: any) => {
      console.log(data);
     var  subsection_data = JSON.parse(data.subsection_content);
     subsection_data.map((section: any, index: number)=>{
         if(index == 0){
           advantages_arr.title = section;
         }else if(index == 1){
          advantages_arr.other = section;
        }else if(index == 2){
          advantages_arr.edureka = section;
        }
     })
  })
  console.log(advantages_arr);
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
            {advantages_arr.title.description}
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.red}`}
          >
            {advantages_arr.other.description}
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className={`${styles.header} ${styles.green}`}
          >
            {advantages_arr.edureka.description}
          </Col>
        </Row>
        {advantages_arr.title.Bullets.map((value: any, index: number) => {
          return (
            <Row key={index} className={styles.cell_row}>
              <Col xs={12} sm={12} md={4} className={styles.cell}>
                <div className={styles.liveclass_icon}>
                  <LiveClassSliderIcon color="#192f60" />
                </div>
                <div className={styles.title_text}>{advantages_arr.title.Bullets[index]}</div>
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
                <div className={styles.text}>{advantages_arr.other.Bullets[index]}</div>
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
                <div className={styles.text}>{advantages_arr.edureka.Bullets[index]}</div>
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
