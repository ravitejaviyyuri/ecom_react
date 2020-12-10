import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "./scrollspy.module.scss";
import { Link } from "react-scroll";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { PhoneIcon } from "../../shared/icons/phoneicon";

const params = {
  Swiper,
  containerClass: styles.swiper_container,
  wrapperClass: styles.wrapper_class,
  slidesPerView: "auto",
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
};

const ScrollSpy = (props: any) => {
  const ref = useRef<any>(null);
  const [isMob, setMob] = useState(false);

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
        ref.current.swiper.destroy();
      } else {
        ref.current.swiper.update();
      }
    }
  }, []);

  return (
    <section className={styles.scrollspy}>
      <Container>
        <ul>
          <ReactIdSwiperCustom ref={ref} {...params}>
            <li>
              <Link
                activeClass={styles.current}
                to="approach"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Approach
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.current}
                to="batches"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Batches
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.current}
                to="curriculum"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.current}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.current}
                to="reviews"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.current}
                to="faqs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                FAQs
              </Link>
            </li>
            <li className={styles.phone}>
              <span>
                <PhoneIcon color="#bdc2cf" />
              </span>
              +91 9988776655
            </li>
            <li>
              <Button className={styles.enroll}>Enroll Now</Button>
            </li>
          </ReactIdSwiperCustom>
        </ul>
      </Container>
    </section>
  );
};

export default ScrollSpy;
