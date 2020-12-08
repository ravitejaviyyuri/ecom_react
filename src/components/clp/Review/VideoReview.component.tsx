import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import styles from "./videoreview.module.scss";
import { NextIcon } from "../../shared/icons/nexticon";
import { PrevIcon } from "../../shared/icons/previcon";
import { LinkedinIcon } from "../../shared/icons/linkedinicon";
import { YoutubeRedIcon } from "../../shared/icons/youtuberedicon";

// const testimonialReviews = [
//   {
//     name: "Sayani Sen 1",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
//   {
//     name: "Sayani Sen 2",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
//   {
//     name: "Sayani Sen 3",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
//   {
//     name: "Sayani Sen 4",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
//   {
//     name: "Sayani Sen 5",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
//   {
//     name: "Sayani Sen 6",
//     company: "AVP - Tata Capital",
//     review:
//       "Our senior frontend developer was “Very structured program by Edureka and NIT Rourkela.",
//   },
// ];
type Props = {
  activeTab: any,
  videoReviews: any
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

const VideoReviews = ({activeTab, videoReviews}: Props) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.update();
    }
  }, [activeTab]);

  return (
    <div>
      <Row>
        <ReactIdSwiperCustom ref={ref} {...params}>
          {videoReviews.map((value: any, index: number) => {
            return (
              <Col key={index} xs={12} sm={12} md={12} lg={4}>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <Image
                      src="/review.png"
                      alt="thumbnail"
                      width={302}
                      height={168}
                      loading="lazy"
                    />
                    <div className={styles.details}>
                      <span className={styles.name}>{value.reviewer_name}</span>
                      <span className={styles.company_name}>
                        {value.company}
                      </span>
                    </div>
                    <span className={styles.youtube_logo}>
                      <YoutubeRedIcon />
                    </span>
                  </div>
                  <div className={styles.card_body}>{value.review_desc}</div>
                  <div className={styles.card_footer}>
                    <a href="">
                      <LinkedinIcon color="#0077b7" />
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </ReactIdSwiperCustom>
      </Row>
    </div>
  );
};

export default VideoReviews;
