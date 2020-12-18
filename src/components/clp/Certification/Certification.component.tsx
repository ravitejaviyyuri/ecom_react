import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./certification.module.scss";
import CertificateZoomModal from "./CertificateZoomModal.component";
import SampleCertificateModal from "./SampleCertificateModal.component";
import { ZoomIcon } from "../../shared/icons/zoomicon";

const Certification = () => {
  const [isMob, setMob] = useState(false);
  const [isZoomModal, setZoomModal] = useState(false);
  const [isSampleCertificateModal, setSampleCertificateModal] = useState(false);

  const handleClose = () => setZoomModal(false);
  const handleShow = () => setZoomModal(true);

  const handleSampleCertificateClose = () => setSampleCertificateModal(false);
  const handleSampleCertificateShow = () => setSampleCertificateModal(true);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 768) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
  }, []);
  return (
    <section className={styles.certification_section}>
      {isZoomModal && (
        <CertificateZoomModal show={isZoomModal} handleClose={handleClose} />
      )}
      {isSampleCertificateModal && (
        <SampleCertificateModal
          show={isSampleCertificateModal}
          handleClose={handleSampleCertificateClose}
        />
      )}
      <Container>
        <Row className={styles.row}>
          <Col xs={12} sm={12} md={6}>
            {!isMob && (
              <div className={styles.heading}>
                Big Data Hadoop Certification
              </div>
            )}
            <div className={styles.sub_heading}>
              Edureka’s DevOps Engineer Certificate Holders work at 1000s of
              companies like
            </div>
            <div className={styles.icons}>
              <div className={styles.img}>
                <Image
                  width={161}
                  height={34}
                  loading="lazy"
                  src="/microsoft_cl.svg"
                  alt="Microsoft Color Logo"
                />
              </div>
              <div className={styles.img}>
                <Image
                  width={104}
                  height={34}
                  loading="lazy"
                  src="/google_cl.svg"
                  alt="Google Color Logo"
                />
              </div>
              <div className={styles.img}>
                <Image
                  width={58}
                  height={34}
                  loading="lazy"
                  src="/citi_cl.svg"
                  alt="Citi Color Logo"
                />
              </div>
              <div className={styles.img}>
                <Image
                  width={130}
                  height={25}
                  loading="lazy"
                  src="/facebook_cl.svg"
                  alt="Facebook Color Logo"
                />
              </div>
              <div className={styles.img}>
                <Image
                  width={136}
                  height={36}
                  loading="lazy"
                  src="/flipkart_cl.svg"
                  alt="Flipkart Color Logo"
                />
              </div>
            </div>
            <Button
              className={styles.sample_certificate_btn}
              onClick={handleSampleCertificateShow}
            >
              GET A SAMPLE CERTIFICATE
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6}>
            {isMob && (
              <div className={styles.heading}>
                Big Data Hadoop Certification
              </div>
            )}
            <img
              src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1606136770/img/certibackgrounds/sample_crt.png"
              alt="Sample Certificate"
              loading="lazy"
            />
            <div className={styles.zoom} onClick={handleShow}>
              <ZoomIcon color="#192f60" />
              Click to enlarge
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certification;
