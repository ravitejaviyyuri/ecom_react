import React from "react";
import styles from "./searchfilterdata.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PhoneIcon } from "../../icons/phoneicon";
import CountryCodeSelect from "../../CountryCodeSelect.component";

const Searchfilterdata = (props: any) => {
 
  return (
    <>   
      <div className={ `${styles.search_field_data} row` }>
        <div className={ `${styles.search_left_bx} col-lg-5 col-md-6 col-sm-6 col-xs-12 ` }>
          <div className={ `${styles.bx_search_result} ${styles.pop_search}` }>
            <div className={styles.title}>Popular Searches</div>
            <ul className={styles.pop_search_ul}>
              <li><a href="/search/python"> python</a> </li>
              <li><a href="/search/devops"> devops</a> </li>
              <li><a href="/search/salesforce"> salesforce</a> </li>
              <li><a href="/search/java"> java</a> </li>
              <li><a href="/search/azure"> azure</a> </li>
            </ul>
          </div>
          <div className={ `${styles.bx_search_result} ${styles.pop_course_cat}` }>
            <div className={styles.title}>Popular Course Categories</div>
            <div className="row">
              <ul className={styles.pop_course_cat_ul}>
                <li><a href="cloud-computing-certification-courses">Cloud Computing</a></li>
                <li><a href="devops-certification-courses" >DevOps</a></li>
                <li><a href="project-management-and-methodologies-certification-courses">Project Management and Methodologies</a></li>
                <li><a href="data-science-certification-courses">Data Science</a></li>
                <li><a href="programming-and-frameworks-certification-courses">Programming &amp; Frameworks</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={ `${styles.search_right_bx} col-lg-7 col-md-6 col-sm-6 col-xs-12` }>
          <div className={ `${styles.bx_search_result} ${styles.pop_course}` }>
            <div className={styles.title}>Popular Courses</div>
            <div className="row">
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/devops-certification-training">
                  <div className={styles.search_pop_course_bx}><span className={styles.tag}></span>
                    <h4>DevOps Certification Training</h4>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;98k+&nbsp;Satisfied Learners</div>
                    <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/aws-certification-training">
                  <div className={styles.search_pop_course_bx}><span className={ `${styles.tag} ${styles.live_tag}` }>AWS Certification Training </span>
                    <h4>AWS Certification Training for Solutions Architect</h4>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;102k+&nbsp;Satisfied Learners</div>
                    <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/post-graduate/machine-learning-and-ai">
                <div className={styles.search_pop_course_bx}><span className={ `${styles.tag} ${styles.pgp_tag}` }>E&amp;ICT NIT Warangal</span>
                    <h4>Post Graduate Diploma in AI and Machine Learning</h4>
                    <div className={styles.learners_count}>Includes ML Algorithms, Tensorflow 2.0, NLP, Sequence Learning, and more</div>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;1k+&nbsp;Satisfied Learners</div>
                      <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/cloud-architect-training">
                <div className={styles.search_pop_course_bx}><span className={ `${styles.tag} ${styles.master_tag}` }>ROLE BASED COURSE COMBOS</span>
                    <h4>Cloud Architect Masters Program</h4>
                    <div className={styles.learners_count}>Includes 4 Live courses: Capstone Project: Python, AWS, AWS DevOps and More</div>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;18k+&nbsp;Satisfied Learners</div>
                      <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/power-bi-certification-training">
                <div className={styles.search_pop_course_bx}>
                    <h4>Microsoft Power BI Training</h4>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;18k+&nbsp;Satisfied Learners</div>
                      <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
              <div className={ `${styles.search_pop_course} col-lg-6 col-md-6 col-sm-6 col-xs-12` }>
                <a href="/power-bi-certification-training">
                <div className={styles.search_pop_course_bx}>
                    <h4>Selenium Certification Training Course</h4>
                    <div className={styles.learners_count}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 31 39">
                        <text data-name="😊" transform="translate(0 30)" fill="#192f60" font-size="30" font-family="AppleColorEmoji, Apple Color Emoji">
                          <tspan x="0" y="0">😊</tspan>
                        </text>
                      </svg>&nbsp;&nbsp;18k+&nbsp;Satisfied Learners</div>
                      <div className={styles.know_more}> KNOW MORE <i className="icon-ac-right-arrow-1"></i> </div>
                  </div>
                </a>
              </div>
            
            
            
            
            </div>
            <div className={styles.view_all_course}><a  href="/all-courses-v2">View All Courses</a></div>
          </div>
        </div>
		  </div>

      <div className={styles.search_field_nodata}>
          <div className={styles.usersearch_input}> We did not understand your query <span id="no-data-input">“User search input”</span>. Please change your query. </div>
          <div className={styles.titile}>Or, share it with a course counsellor </div>
          <div className={styles.form_field_num}>
            <Form className={styles.search_duq_form}>
              <div className={styles.title}>Drop us your query</div>
                <Form.Group controlId="duqFormTextarea">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your query here*"
                    className={styles.input}
                  />
                </Form.Group>
                <Form.Group
                  controlId="duqFormPhoneNumber"
                  className="position-relative"
                >
                  <Form.Label className={styles.label}>Contact Details</Form.Label>
                  <CountryCodeSelect className={styles.code_select} options=""/>
                  <Form.Control
                    className={`${styles.input} ${styles.phone_input}`}
                    type="tel"
                    placeholder="Enter Phone Number*"
                  />
                </Form.Group>
                <Form.Group controlId="duqFormEmail">
                  <Form.Control
                    className={styles.input}
                    type="email"
                    placeholder="eg@saga.gmail.com"
                  />
                </Form.Group>
                <Button className={styles.submit} variant="primary">
                  SUBMIT QUERY
                </Button>
              </Form>
            <div className={styles.or_text}>Or</div>
            <div className={styles.num_call_text}>
              <div className={styles.title}>Talk to a course counsellor </div>
              <div className={styles.num_ico}> 
                <i><PhoneIcon color="#192f60" /></i>
                <div className={styles.num_view}> <span className={styles.num}><a href="tel:+91 89517 55408" className={styles.countryChangeNumber}> +91 89517 55408 </a></span> <span className={styles.text}>Available 24x7 for your queries</span> </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchfilterdata;
