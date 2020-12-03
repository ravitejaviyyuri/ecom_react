import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./title.module.scss";

const CourseTitle = () => {
  return (
    <section className={styles.title_section}>
      <Container>
        <div className={styles.mix_section}>
          <div className={styles.heading}>
            <h1>Big Data Hadoop Certification Training</h1>
            <span>LIVE CLASSES</span>
          </div>
          <div className={styles.contact_share}>
            <div className={styles.conatct_bx}>
              <a href="callto:+919988776655">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.523"
                  height="16.491"
                  viewBox="0 0 16.523 16.491"
                >
                  <path
                    id="Path_24546"
                    data-name="Path 24546"
                    d="M53.8,12.05l-2.3-2.3a1.569,1.569,0,0,0-2.2,0,2.092,2.092,0,0,0-.4.6,1.566,1.566,0,0,1-1.8,1,7.3,7.3,0,0,1-4.3-4.3,1.431,1.431,0,0,1,1-1.8,1.584,1.584,0,0,0,1-1.9,2.092,2.092,0,0,0-.4-.6L42.1.45a1.569,1.569,0,0,0-2.2,0l-1.6,1.6c-1.6,1.6.2,6,4,9.8,3.9,3.9,8.2,5.7,9.8,4l1.6-1.6a1.485,1.485,0,0,0,.1-2.2"
                    transform="translate(-37.719)"
                  />
                </svg>
                +91 9988776655
              </a>
            </div>
            <div className={styles.wishlist_bx}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.984"
                height="16.89"
                viewBox="0 0 18.984 16.89"
              >
                <path
                  d="M9.492 16.89a1.113 1.113 0 0 1-.734-.276c-.767-.671-1.506-1.3-2.159-1.857a40.148 40.148 0 0 1-4.716-4.427A7.066 7.066 0 0 1 0 5.705a5.933 5.933 0 0 1 1.506-4.052A5.1 5.1 0 0 1 5.3 0a4.775 4.775 0 0 1 2.986 1.03 6.1 6.1 0 0 1 1.206 1.259A6.1 6.1 0 0 1 10.7 1.03 4.775 4.775 0 0 1 13.681 0a5.105 5.105 0 0 1 3.8 1.653 5.933 5.933 0 0 1 1.506 4.052A7.065 7.065 0 0 1 17.1 10.33a40.139 40.139 0 0 1-4.713 4.424 19.265 19.265 0 0 1-2.895 2.136z"
                  opacity="0.379"
                />
              </svg>
            </div>
            <div className={styles.share_bx}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.652"
                height="16.099"
                viewBox="0 0 17.652 16.099"
              >
                <path
                  d="M17.652 8.544L10.316.5v4.8h-1.56A8.756 8.756 0 0 0 0 14.056V16.6l.693-.759a12.431 12.431 0 0 1 9.182-4.051h.441v4.8zm0 0"
                  opacity="0.379"
                  transform="translate(0 -.5)"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseTitle;
