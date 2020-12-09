import React, { useState, useEffect,useContext } from "react";
import { AppContext } from '../../../store';
import { Navbar, Nav, Button } from "react-bootstrap";
import styles from "./navbar.module.scss";
import SearchOverlay from "./SearchOverlay.component";
import LoginSignoutNav from "./login_signout_nav/LoginSignoutNav.component";
import MenuLeftSlide from "./left_slide_menu/LeftSlideNav.component";
import { EdurekaLogo } from "../icons/edurekalogo";
import { HamMenu } from "../icons/hammenu";
import { SearchIcon } from "../icons/searchicon";
import { PhoneIcon } from "../icons/phoneicon";

const HeaderNavbar = (props: any) => {

  const{state} = useContext(AppContext);

  const [isSearchModal, setSearchModal] = useState(false);

  const handleClose = () => setSearchModal(false);
  const handleShow = () => setSearchModal(true);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  console.log("homenav")
  console.log(state.userState.userInfo.loginStatus.islogin);
  return (
    <>
      {sidebar && (
        <MenuLeftSlide sidebar={sidebar} showSidebar={showSidebar} setLoginSignup={props.setLoginSignup} />
      )}

      {isSearchModal && (
        <SearchOverlay show={isSearchModal} handleClose={handleClose} />
      )}

      <Navbar className={styles.header_new} fixed="top" bg="white">
        <div className={styles.responsive_ham} onClick={showSidebar}>
          <HamMenu color="#0052cc" />
        </div>

        <Navbar.Brand className={styles.edu_logo} href="#home">
          <EdurekaLogo color="#0052cc" />
        </Navbar.Brand>
        <Nav className={`${styles.search_click_bx}`}>
          <div className={styles.search_bx} onClick={handleShow}>
            <SearchIcon color="#5a6484" />
            <span>Search courses</span>
          </div>
        </Nav>
        <Nav className={`${styles.contact_click_bx}`}>
          <div className={styles.conatct_bx}>
            <a href="callto:+919988776655">
              <PhoneIcon />
            </a>
          </div>
        </Nav>
        <LoginSignoutNav
          setLoginSignup={props.setLoginSignup}
          isLoggedIn={state.userState.userInfo.loginStatus.islogin}
        />
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
