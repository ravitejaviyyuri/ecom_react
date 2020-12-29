import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./footer.module.scss";
import TrendingCertificationCourses from "./TrendingCertificationCourses.component";
import TrendingMasterCourses from "./TrendingMasterCourses.component";
import EdurekaLinks from "./EdurekaLinks.component";
import WorkWithUs from "./WorkWithUs.component";
import Support from "./Support.component";
import Sitemaps from "./Sitemaps.component";
import CountrySelect from "./CountrySelect.component";
import ScrollUp from "../ScrollUp.component";
import { EdurekaLogo } from "../icons/edurekalogo";
import { FacebookIcon } from "../icons/facebookicon";
import { TwitterIcon } from "../icons/twittericon";
import { LinkedinIcon } from "../icons/linkedinicon";
import { YoutubeIcon } from "../icons/youtubeicon";
import {Country} from '../../../interfaces/country';

 type Props = {
   countries: any;
 }

const Footer = ({countries}: Props) => {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [showScrollTop, setshowScrollTop] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setScrollPos(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (process.browser) {
      if (scrollPos > document.body.scrollHeight - 2000) {
        setshowScrollTop(true);
      } else {
        setshowScrollTop(false);
      }
    }
  }, [scrollPos]);
  return (
    <section className={styles.footer_section}>
      {showScrollTop && <ScrollUp />}
      <Container>
        <Row>
          <Col className={styles.logo}>
            <EdurekaLogo color="#ffffff" />
          </Col>
        </Row>
        <Row className={styles.courses_section}>
          <Col className="px-4 p-md-0" xs={12} sm={12} md={5}>
            <TrendingCertificationCourses />
          </Col>
          <Col className="px-4 p-md-0" xs={12} sm={12} md={5}>
            <TrendingMasterCourses />
          </Col>
          <Col
            className={`px-4 p-md-0 ${styles.store_section}`}
            xs={12}
            sm={12}
            md={2}
          >
            <Image
              src="/ios.svg"
              width={200}
              height={60}
              loading="lazy"
              alt="app_store"
            />
            <Image
              src="/android.svg"
              width={200}
              height={60}
              loading="lazy"
              alt="play_store"
            />
          </Col>
        </Row>
        <Row className={styles.about_section}>
          <Col className="px-4 p-md-0" xs={6} sm={6} md={3}>
            <EdurekaLinks />
          </Col>
          <Col className="px-4 p-md-0" xs={6} sm={6} md={3}>
            <WorkWithUs />
          </Col>
          <Col className="px-4 p-md-0" xs={6} sm={6} md={3}>
            <Support />
          </Col>
          <Col className="px-4 p-md-0" xs={6} sm={6} md={3}>
            <Sitemaps />
          </Col>
        </Row>
        <Row className={styles.trademark_section}>
          <Col xs={12} sm={12} md={8} className={styles.trademark_text}>
            “PMP®”,”PMI®”, “PMI-ACP®” and “PMBOK®” are registered marks of the
            Project Management Institute, Inc. MongoDB®, Mongo and the leaf logo
            are the registered trademarks of MongoDB, Inc.
          </Col>
          <Col xs={12} sm={12} md={4} className={styles.country_section}>
            <CountrySelect   countries={countries}/>
          </Col>
        </Row>
        <Row className={styles.copyright_section}>
          <Col xs={12} sm={12} md={8} className={styles.copyright_text}>
            © 2020 Brain4ce Education Solutions Pvt. Ltd. All rights Reserved
          </Col>
          <Col xs={12} sm={12} md={4} className={styles.company_logo_section}>
            <a href="">
              <FacebookIcon color="#ffffff" />
            </a>
            <a href="">
              <TwitterIcon color="#ffffff" />
            </a>
            <a href="">
              <LinkedinIcon color="#ffffff" />
            </a>
            <a href="">
              <YoutubeIcon color="#ffffff" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
