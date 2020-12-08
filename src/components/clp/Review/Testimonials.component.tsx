import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import styles from "./testimonials.module.scss";
import TestimonialPopup from "./TestimonialPopup.component";
import { NextIcon } from "../../shared/icons/nexticon";
import { PrevIcon } from "../../shared/icons/previcon";
import { LinkedinIcon } from "../../shared/icons/linkedinicon";
import { RightArrowIcon } from "../../shared/icons/rightarrowicon";

const testimonialReviews = [
  {
    name: "Emma Stone 1",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
  {
    name: "Emma Stone 2",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
  {
    name: "Emma Stone 3",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
  {
    name: "Emma Stone 4",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
  {
    name: "Emma Stone 5",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
  {
    name: "Emma Stone 6",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of ",
  },
];
type Props = {
  testimonials : any,
  activeTab: any
}
const params = {
  Swiper,
  modules: [Navigation, Pagination],
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

const Testimonials = ({activeTab, testimonials}: Props) => {
  const ref = useRef<any>(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.update();
    }
  }, [activeTab]);
  return (
    <div>
      <Row>
        <ReactIdSwiperCustom ref={ref} {...params}>
          {testimonials.map((value: any, index: number) => {
            return (
              <Col key={index} xs={12} sm={12} md={12} lg={4}>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <Image
                      src="/avatar.png"
                      alt="avatar"
                      width={58}
                      height={58}
                      loading="lazy"
                      layout="fixed"
                    />
                    <div className={styles.details}>
                      <span>{value.reviewer_name}</span>
                      <a href="">
                        <LinkedinIcon color="#0077b7" />
                      </a>
                    </div>
                  </div>
                  <div className={styles.card_body}>{value.review_desc}</div>
                  <div className={styles.card_footer}>
                    <span onClick={handleShow}>READ MORE</span>
                    <RightArrowIcon color="#004dff" />
                  </div>
                </div>
              </Col>
            );
          })}
        </ReactIdSwiperCustom>
      </Row>

      <TestimonialPopup show={show} handleClose={handleClose} testimonials = {testimonials} />
    </div>
  );
};

export default Testimonials;
