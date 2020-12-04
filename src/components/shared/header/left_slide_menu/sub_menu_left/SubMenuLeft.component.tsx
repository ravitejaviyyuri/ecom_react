import React from "react";
import Button from "react-bootstrap/Button";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { CrossIcon } from "../../../icons/crossicon";
import styles from "./submenuleft.module.scss";

const SubMenuleft = (props: any) => {
  let options = [
    {
      title: "",
      hideBorder: true,
      content: [
        {
          id: 1,
          name: "Categories",
          children: [
            {
              title: "JavaScript",
              content: [
                {
                  id: 2,
                  name: "functions",
                  children: [
                    {
                      content: [
                        {
                          id: 3,
                          name: "functions",
                          to: "#",
                        },
                        {
                          id: 4,
                          name: "functfghjions",
                          to: "#",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "",
      hideBorder: true,
      content: [{ id: 1, name: "Corporate Training", to: "/my-courses" }],
    },
    {
      title: "",
      hideBorder: true,
      content: [{ id: 1, name: "All Courses", to: "/my-courses" }],
    },
    {
      title: "",
      hideBorder: true,
      content: [{ id: 1, name: "Blog", to: "/my-courses" }],
    },
    {
      title: "",
      hideBorder: true,
      content: [
        {
          id: 1,
          name: (
            <Button
              className={styles.login_btn}
              onClick={() => {
                props.setLoginSignup(true, "login");
              }}
            >
              Log In
            </Button>
          ),
        },
      ],
    },
    {
      title: "",
      hideBorder: true,
      content: [
        {
          id: 1,
          name: (
            <Button
              className={styles.signup_btn}
              onClick={() => {
                props.setLoginSignup(true, "signup");
              }}
            >
              Sign Up
            </Button>
          ),
        },
      ],
    },
  ];
  //   you can also use this function on any of your event to open/close the sidebar
  const handleSidebarToggle = () => {
    props.showSidebar(props.sidebar);
  };
  return (
    <div>
      <MultilevelSidebar
        open={props.sidebar}
        onToggle={handleSidebarToggle}
        options={options}
        header="Browse Categories"
        wrapperClassName={styles.wrapper}
        headerClassName={styles.header}
      />
      <div className={styles.close_btn} onClick={handleSidebarToggle}>
        <CrossIcon color="#000000" />
      </div>
    </div>
  );
};

export default SubMenuleft;
