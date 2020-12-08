import React, { useState } from "react";
import styles from "./leftslidenav.module.scss";
import SubMenuLeft from "./sub_menu_left/SubMenuLeft.component";

function MenuLeftSlide(props: any) {
  return (
    <>
      <nav
        className={`${
          props.sidebar ? styles.active_left_nav : styles.nav_menu
        }`}
      >
        <div className={styles.nav_menu_items_drop}>
          <SubMenuLeft
            sidebar={props.sidebar}
            showSidebar={props.showSidebar}
            setLoginSignup={props.setLoginSignup}
          />
        </div>
      </nav>
    </>
  );
}

export default MenuLeftSlide;
