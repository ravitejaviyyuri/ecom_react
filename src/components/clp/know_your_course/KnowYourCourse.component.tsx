import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from './knowyourcourse.module.scss';

const MAX_ITEMS = 3;

const titlekwmore = [
  {
    title1: "What are the system requirements for this course?",
    title2: "What are the system requirements for this course?",
  },
];

class KnowYourCourse extends React.Component<any, any>{
  leftitems: string[] = [];
  rightitems: string[] = [];
  
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen1: false,
      isOpen2: false
    };
    this.leftitems = [
      'DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance',
      'In this course you will learn about Version Controlling',
      'Code Automation, Continuous Integration',
      'Item 4',
      'Item 5',
     ];
     this.rightitems = [
      'DevOps improves collaboration and productivity by automating infrastructure and workflows and continuously measuring applications performance',
      'In this course you will learn about Version Controlling',
      'Code Automation, Continuous Integration',
      'Item 4',
      'Item 5',
      ];
  }
  
  
  
  toggle = (event:any) => {
    if(event.target.id=="test1")
    this.setState({ isOpen1: !this.state.isOpen1 });
    else if(event.target.id=="test2")
    this.setState({ isOpen2: !this.state.isOpen2 });
  }
  getRenderedLeftItems() {
    if (this.state.isOpen1) {
      return this.leftitems;
    }
    return this.leftitems.slice(0, MAX_ITEMS);
  }
  getRenderedRightItems() {
    if (this.state.isOpen2) {
      return this.rightitems;
    }
    return this.rightitems.slice(0, MAX_ITEMS);
  }

    render(){
        return(
          
          
        <section className={styles.kw_course_section}>
          <Container>
            <div className={styles.section_title}>Get to know your course</div>
            <div className={styles.kw_course_card}>
              <Row>
                <Col className={`${styles.learn_bx} ${styles.padding_r_30}`} lg={6}>
                <div className={`${styles.image_info} ${styles.back_blue}`}>
                    <span>What will you learn as a part of this course?</span>
                    <img src="" />
                  </div>
                  <div>
                    <ul>
                    {this.getRenderedLeftItems().map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                    </ul>
                    <button id="test1" onClick={this.toggle}>
                      {this.state.isOpen1 ? 'READ LESS' : 'READ MORE'}
                    </button>
                  </div>
                </Col>
                <Col className={`${styles.learn_bx} ${styles.padding_l_30}`} lg={6}>
                  <div className={`${styles.image_info} ${styles.back_green}`}>
                    <span>What skills you will learn with DevOps course?</span>
                    <img src="" />
                  </div>
                  <div>
                    <ul>
                    {this.getRenderedRightItems().map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                    </ul>
                    <button id="test2" onClick={this.toggle}>
                      {this.state.isOpen2 ? 'READ LESS' : 'READ MORE'}
                    </button>
                  </div>
                </Col>
              </Row>
              <Row className={styles.extra_info_this}>
                <Col className={`${styles.extra_bx} ${styles.padding_r_30}`} lg={6}>
                  <div className={styles.title}>Who should go for this training?</div>
                  <p>The following professionals can go for this course:</p>
                  <p>Software Tester, System Admin, Solution Architect, Security Engineer, Application Developers etc.</p>
                </Col>
                <Col className={`${styles.extra_bx} ${styles.padding_l_30}`} lg={6}>
                  <div className={styles.title}>What are the pre-requisites for this Course?</div>
                  <p>To help you brush up these skills, you will get the following self-paced modules as pre-requisites in your LMS:</p>
                  <p>Python Scripting & Linux Fundamentals</p>
                </Col>
              </Row>

              <div className={styles.relative_bx}>
                <div className={styles.absolute_bx}>
                  <div className={styles.title}>Glimpse of future</div>
                  <Row>
                    <Col className={styles.glim_bx}>
                      <div className={styles.icon_text}>11 Lacs</div>
                      <p className={styles.text}>
                      As per glassdoor, the average salary given to DevOps Engineer is INR 11,00,000 per year
                      </p>
                    </Col>
                    <Col className={styles.glim_bx}>
                      <div className={styles.icon_text}>600+ Jobs</div>
                      <p className={styles.text}>
                      600+ DevOps Engineer jobs are available in Bangalore- LinkedIn
                      </p>
                    </Col>
                    <Col className={styles.glim_bx}>
                      <div className={styles.icon_text}>1.4 Billion </div>
                      <p className={styles.text}>
                      top Tech Giants Investments by companies like Amazon, Google, Microsoft etc.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

            <div className={styles.list_item_info_course}>
              <ul>
                <li><span>9 weeks</span></li>
                <li><span>18 live classes</span></li>
                <li><span>8 tests</span></li>
                <li><span>12 assignments</span></li>
                <li><span>2 Capstone Project</span></li>
                <li><span>Devops Certificate</span></li>
              </ul>
            </div>
          </Container>
        </section>

          
        )  
    }
}

export default KnowYourCourse;