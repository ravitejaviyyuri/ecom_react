import { before } from "lodash";
import React from "react";
import { Nav, Dropdown } from "react-bootstrap";
import styles from "./loginsignoutnav.module.scss";
import { BellIcon } from "../../icons/bellicon";

const navDropdownIcon = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M15.756 30.294c1.982 0 3.574-1.592 3.574-3.574h-7.147c0 1.982 1.592 3.574 3.574 3.574zM26.477 21.961c0 0-2.388-1.836-2.388-4.759s0-3.574 0-3.574c0-3.785-2.518-6.969-5.961-7.992v-1.543c0-1.316-1.072-2.388-2.388-2.388s-2.388 1.072-2.388 2.388v1.543c-3.427 1.023-5.929 4.207-5.929 7.976 0 0 0 0.65 0 3.574s-2.388 4.759-2.388 4.759l-1.186 3.574h23.829l-1.202-3.557z"></path>
  </svg>
);

const userimage = (
  <img
    className="thumbnail-image"
    src="/image/rev_user_image__1603460455.png"
    alt="user pic"
  />
);
const LoginNav = () => {
  return (
    <>
      <Nav className={styles.right_links}>
        <Nav.Item className={styles.refer_links}>
          <Nav.Link className={styles.right_links_a} href="/">
            Refer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.mycourse_links}>
          <Nav.Link className={styles.right_links_a} href="/">
            My Courses
          </Nav.Link>
        </Nav.Item>

        <Dropdown className={styles.community_drop}>
          <Dropdown.Toggle id="dropdown-community">Community</Dropdown.Toggle>
          <Dropdown.Menu className={styles.user_list_drop} alignRight>
            <Dropdown.Item href="#">Forum</Dropdown.Item>
            <Dropdown.Item href="#">Blog</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className={styles.notification_drop}>
          <Dropdown.Toggle id="dropdown-notification">
            <BellIcon />
            <span>6</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.notification_list_drop} alignRight>
            <Dropdown.Item href="#">Forum</Dropdown.Item>
            <Dropdown.Item href="#">Blog</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className={styles.user_drop}>
          <Dropdown.Toggle
            className={styles.user_name_img}
            id="dropdown-user_drop"
          >
            <span>Pushpak</span> {userimage}
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.user_list_drop} alignRight>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </>
  );
};

export default LoginNav;
