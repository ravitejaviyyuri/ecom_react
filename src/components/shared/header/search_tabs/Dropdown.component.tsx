import React, { useEffect, useRef } from "react";
import styles from "./dropdown.module.scss";

const Dropdown = (props: any) => {
  const ref = useRef<any>(null);

  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      toggleDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const toggleDropdown = (value?: any) => {
    props.toggleDropdown(value);
  };

  return (
    <div ref={ref} className={styles.dropdown__wrapper}>
      <a
        className={styles.dropdown__toggle}
        href="#"
        onClick={() => toggleDropdown()}
        data-toggle="dropdown"
      >
        ...
      </a>
      <ul
        id="hidden-menu"
        className={`${styles.dropdown} ${props.active ? styles.active : ""}`}
      >
        {props.children}
      </ul>
    </div>
  );
};

export default Dropdown;
