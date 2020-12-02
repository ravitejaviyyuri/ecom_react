import React from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import styles from "./testimonialpopup.module.scss";

const testimonialReviews = [
  {
    name: "Emma Stone 1",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
  },
  {
    name: "Emma Stone 2",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
  },
  {
    name: "Emma Stone 3",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
  },
  {
    name: "Emma Stone 4",
    review:
      "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures. They took care of  Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela. The instructors were knowledgeable, competent and delivered very sound lectures.",
  },
];

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
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-left"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
  ),
  renderNextButton: () => (
    <div className={`swiper-button-next ${styles.next_btn}`}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="1023"
            height="1024"
            viewBox="0 0 1023 1024"
          >
            <title></title>
            <g id="icomoon-ignore"></g>
            <path
              fill="#000000"
              d="M1023.29 923.162l-411.162-411.162 411.162-411.162-100.128-100.838-411.162 411.162-411.162-411.162-100.838 100.128 411.162 411.872-411.162 411.162 100.128 100.838 411.872-411.872 411.162 411.162 100.128-100.128z"
            ></path>
          </svg>
        </div>
        <ReactIdSwiperCustom {...params}>
          {testimonialReviews.map((value: any, index: number) => {
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
                    <span>{value.name}</span>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.378"
                        height="17.378"
                        viewBox="0 0 17.378 17.378"
                      >
                        <path
                          id="Path_24540"
                          data-name="Path 24540"
                          d="M15.806,0H1.572A1.572,1.572,0,0,0,0,1.572V15.806a1.572,1.572,0,0,0,1.572,1.572H15.806a1.572,1.572,0,0,0,1.572-1.572V1.572A1.572,1.572,0,0,0,15.806,0ZM5.377,15.005a.457.457,0,0,1-.457.457H2.973a.457.457,0,0,1-.457-.457V6.842a.457.457,0,0,1,.457-.457H4.92a.457.457,0,0,1,.457.457ZM3.946,5.615A1.85,1.85,0,1,1,5.8,3.765,1.85,1.85,0,0,1,3.946,5.615Zm11.608,9.427a.421.421,0,0,1-.421.421h-2.09a.421.421,0,0,1-.421-.421V11.213c0-.571.168-2.5-1.493-2.5-1.288,0-1.549,1.322-1.6,1.916v4.416a.421.421,0,0,1-.421.421H7.087a.421.421,0,0,1-.421-.421V6.805a.421.421,0,0,1,.421-.421H9.108a.421.421,0,0,1,.421.421v.712a2.869,2.869,0,0,1,2.7-1.27c3.346,0,3.327,3.126,3.327,4.844v3.951Z"
                          fill="#0077b7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={styles.card_body}>{value.review}</div>
                <div className={styles.card_footer} onClick={props.handleClose}>
                  CLOSE
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1023"
                    height="1024"
                    viewBox="0 0 1023 1024"
                  >
                    <title></title>
                    <g id="icomoon-ignore"></g>
                    <path
                      fill="#0052cc"
                      d="M1023.29 923.162l-411.162-411.162 411.162-411.162-100.128-100.838-411.162 411.162-411.162-411.162-100.838 100.128 411.162 411.872-411.162 411.162 100.128 100.838 411.872-411.872 411.162 411.162 100.128-100.128z"
                    ></path>
                  </svg>
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
