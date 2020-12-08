import React from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import styles from "./testimonialpopup.module.scss";
import { NextIcon } from "../../shared/icons/nexticon";
import { PrevIcon } from "../../shared/icons/previcon";
import { LinkedinIcon } from "../../shared/icons/linkedinicon";
import { CrossIcon } from "../../shared/icons/crossicon";

// const testimonialReviews = [
//   {
//     name: "Emma Stone 1",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
//   },
//   {
//     name: "Emma Stone 2",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
//   },
//   {
//     name: "Emma Stone 3",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
//   },
//   {
//     name: "Emma Stone 4",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
//   },
// ];

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
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 1,
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

const TestimonialPopup = (props: any) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="testimonial_readmore_modal"
    >
      <Modal.Body className={styles.modal_body}>
        <div className={styles.close_btn} onClick={props.handleClose}>
          <CrossIcon color="#000000" />
        </div>
        <ReactIdSwiperCustom {...params}>
          {props.testimonials.map((value: any, index: number) => {
            console.log(value);
            return (
              <div key={index} className={styles.card}>
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
                <div className={styles.card_footer} onClick={props.handleClose}>
                  CLOSE
                  <CrossIcon color="#0052cc" />
                </div>
              </div>
            );
          })}
        </ReactIdSwiperCustom>
      </Modal.Body>
    </Modal>
  );
};

export default TestimonialPopup;
