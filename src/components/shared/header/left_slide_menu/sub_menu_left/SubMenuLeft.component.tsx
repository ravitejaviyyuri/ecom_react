import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { CrossIcon } from "../../../icons/crossicon";
import styles from "./submenuleft.module.scss";
import UPDATE_USER_STATE  from '../../../../../store/user/action';
import {initState as initialState} from "../../../../../store/user/context";
import {AppContext} from '../../../../../store';
import {cookie_const} from '../../../../../utils/constants';
import {deleteCookie} from '../../../../../utils/cookie';
import { forEach } from "lodash";


const SubMenuleft = (props: any) => {
  const {state, dispatch} = useContext(AppContext);

  let options = [
    {
      title: "",
      hideBorder: true,
      content: [
        {
          id: 1,
          name: "Categories",
          children:props.categories
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

  let loggedInOptions = [
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
      content: [{ id: 1, name: "My Courses", to: "/my-courses" }],
    },
    {
      title: "",
      hideBorder: true,
      content: [{ id: 1, name: "Community", to: "/my-courses" }],
    },
    {
      title: "",
      hideBorder: true,
      content: [{ id: 1, name: "Refer", to: "/my-courses" }],
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
                //props.setLogoutSignup(true, "signup");
                console.log("logoutmenu");
                dispatch({ type: UPDATE_USER_STATE.type,
                 action: UPDATE_USER_STATE.action.UPDATE_LOGOUT,
                data: initialState})
                deleteCookie(cookie_const.COOKIE_BRAIN4CE);
                deleteCookie(cookie_const.COOKIE_USER_EMAIL);
                deleteCookie(cookie_const.COOKIE_USER_PHONE);
              }}
            >
              Logout
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

  let isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <MultilevelSidebar
        open={props.sidebar}
        onToggle={handleSidebarToggle}
        options={isLoggedIn ? loggedInOptions : options}
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
