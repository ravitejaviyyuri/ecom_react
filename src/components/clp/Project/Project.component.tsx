import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import styles from "./project.module.scss";
import { SwiperComponent } from "swiper/types/shared";
import { NextIcon } from "../../shared/icons/nexticon";
import { PrevIcon } from "../../shared/icons/previcon";

const projectArray = [
  {
    name: "Uber Supply-Demand Gap 1",
    desc:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care.",
  },
  {
    name: "Uber Supply-Demand Gap 2",
    desc:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care.",
  },
  {
    name: "Uber Supply-Demand Gap 3",
    desc:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care.",
  },
  {
    name: "Uber Supply-Demand Gap 4",
    desc:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care.",
  },
];

const IndustryProjects = () => {
  const ref = useRef<any>(null);
  const [isMob, setMob] = useState(false);
  const cardNumber: number = projectArray.length;
  let desktopSize: number = 12;
  let cardColSize: number = 12;
  let cardClass: string = `${styles.card}`;
  if (cardNumber == 1) {
    cardClass = `${styles.card} ${styles.one}`;
    desktopSize = 12;
    cardColSize = 8;
  } else if (cardNumber == 2) {
    cardClass = `${styles.card} ${styles.two}`;
    desktopSize = 6;
    cardColSize = 12;
  } else {
    cardClass = `${styles.card}`;
    desktopSize = 4;
    cardColSize = 12;
  }
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
    if (ref.current !== null && ref.current.swiper !== null) {
      if (!isMob) {
        if (cardNumber < 4) {
          ref.current.swiper.destroy();
        }
      }
    }
  }, []);

  let modulesToLoad: SwiperComponent[] = [];
  if (cardNumber > 3 || isMob) {
    modulesToLoad = [Navigation, Pagination];
  }
  const params = {
    Swiper,
    modules: modulesToLoad,
    containerClass: styles.swiper_container,
    pagination: {
      el: `.swiper-pagination.${styles.pagination}`,
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<span class="${className} ${styles.bullet}"></span>`;
      },
    },
    navigation: {
      nextEl: `.swiper-button-next.${styles.next_btn}`,
      prevEl: `.swiper-button-prev.${styles.prev_btn}`,
    },
    renderPrevButton: () => (
      <div className={`swiper-button-prev ${styles.prev_btn}`}>
        <PrevIcon />
      </div>
    ),
    renderNextButton: () => (
      <div className={`swiper-button-next ${styles.next_btn}`}>
        <NextIcon />
      </div>
    ),
    slidesPerView: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    rebuildOnUpdate: true,
    shouldSwiperUpdate: true,
  };
  return (
    <section id="projects" className={styles.project_section}>
      <Container className="p-0">
        <Row>
          <div className={styles.heading}>Industry Project</div>
          <ReactIdSwiperCustom ref={ref} {...params}>
            {projectArray.map((value: any, index: number) => {
              return (
                <Col key={index} xs={12} sm={12} md={desktopSize}>
                  <div className={cardClass}>
                    <Row className={cardNumber === 1 ? "flex-row-reverse" : ""}>
                      <Col xs={12} sm={12} md={12 - cardColSize}>
                        <img src="" alt="Project Image" />
                      </Col>
                      <Col xs={12} sm={12} md={cardColSize}>
                        <h3>{value.name}</h3>
                        <span>{value.desc}</span>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </ReactIdSwiperCustom>
        </Row>
      </Container>
    </section>
  );
};

export default IndustryProjects;
