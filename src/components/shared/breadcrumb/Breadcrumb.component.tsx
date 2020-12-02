import React from 'react'
import Container from "react-bootstrap/Container";
import styles from './breadcrumb.module.scss'

class Breadcrumb extends React.Component{

    render(){
        return(
          
        <section className={styles.breadcrum_section}>
          <Container>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">All courses</a></li>
                <li>Devops</li>
              </ul>
          </Container>
        </section>

          
        )  
    }
}

export default Breadcrumb;