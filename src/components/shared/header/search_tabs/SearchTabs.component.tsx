import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import SubMenuLinks from "./SubMenuLinks.component";
import Dropdown from "./Dropdown.component";
import styles from "./searchtabs.module.scss";
import Container from "react-bootstrap/Container";
import { RightArrowIcon } from "../../icons/rightarrowicon";

const MenuLinks = (props: any) => {
  const ref = useRef<any>(null);
  const [tabs, setTabs] = useState<any>({
    masters: "Masters Program",
    new: "New Launches",
    cc: "Cloud Computing",
    ai: "Artificial Intelligence",
    trending: "Trending Courses",
    devops: "DevOps",
    ds: "Data Science",
    bd: "Big Data",
    bi: "BI & Visualization",
    pf: "Programming Frameworks",
    block: "BlockChain",
  });
  const [responsiveTabs, setResponsiveTabs] = useState<any>({});
  const [menuName, setMenuName] = useState("masters");
  const [clientWidth, setClientWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [dropdownStatus, setDropdownStatus] = useState(false);

  useEffect(() => {
    const throttledUpdate = _.throttle(update, 1000);
    setClientWidth(ref.current.clientWidth);
    window.addEventListener("resize", throttledUpdate);
    return () => {
      window.removeEventListener("resize", throttledUpdate);
    };
  }, []);

  useEffect(() => {
    spliceTabs();
  }, [clientWidth]);

  const update = () => {
    setTabs({ ...tabs, ...responsiveTabs });
    setResponsiveTabs({});
    setClientWidth(ref.current.clientWidth);
  };

  const spliceTabs = () => {
    if (clientWidth !== 0) {
      let totalWidth = 0;
      let barWidth = clientWidth - 100;
      const el = document.getElementsByClassName("tab_list_pic");
      let tabTemp = { ...tabs };
      let responsiveTemp = { ...responsiveTabs };
      for (let i = 0; i < el.length; i++) {
        const tabWidth = el[i].clientWidth;
        if (i === el.length - 1) {
          barWidth += 100;
        }
        if (totalWidth + tabWidth > barWidth) {
          let key = el[i].id;
          responsiveTemp[key] = tabTemp[el[i].id];
          delete tabTemp[el[i].id];
          setTabs(tabTemp);
          setResponsiveTabs(responsiveTemp);
        }
        totalWidth += tabWidth;
      }
    }
  };

  const selectMenu = (name: string, index: number, menu: string) => {
    let reorderedtab;
    let reordereresponsivetab;
    if (menu == "hidden") {
      let tabsTemp = { ...tabs };
      let deletedLastkey = Object.keys(tabsTemp)[Object.keys(tabs).length - 1];
      let deletedLastValue = tabsTemp[deletedLastkey];
      delete tabsTemp[deletedLastkey];
      let responsiveTemp = { ...responsiveTabs };
      reorderedtab = {
        [name]: responsiveTemp[name],
      };
      reorderedtab = { ...reorderedtab, ...tabsTemp };
      reordereresponsivetab = {
        [deletedLastkey]: deletedLastValue,
      };
      delete responsiveTemp[name];
      reordereresponsivetab = { ...reordereresponsivetab, ...responsiveTemp };
    } else {
      reorderedtab = { ...tabs };
      reordereresponsivetab = { ...responsiveTabs };
    }
    setTabs(reorderedtab);
    setResponsiveTabs(reordereresponsivetab);
    setMenuName(name);
    setActive(index);
    setDropdownStatus(false);
  };

  const toggleDropdown = (value?: any) => {
    if (value !== undefined) {
      setDropdownStatus(value);
    } else {
      setDropdownStatus(!dropdownStatus);
    }
  };

  return (
    <>
      <div className={styles.category_header}>
        <Container>
          <ul id="menu" ref={ref} className={styles.search_list_tab}>
            {Object.keys(tabs).map((name, index) => {
              return (
                <li
                  key={index}
                  id={name}
                  className={`tab_list_pic ${styles.tab__item} ${
                    active === index ? styles.active : ""
                  }`}
                  onClick={() => selectMenu(name, index, "main")}
                >
                  {tabs[name]}
                </li>
              );
            })}
            {Object.keys(responsiveTabs).length > 0 && (
              <Dropdown active={dropdownStatus} toggleDropdown={toggleDropdown}>
                {Object.keys(responsiveTabs).map((tab, index) => {
                  const tabIndex = Object.keys(tabs).length + index;
                  return (
                    <li
                      id={tab}
                      key={index}
                      className={`tab_list_pic ${styles.tab__item}`}
                      onClick={() => selectMenu(tab, 0, "hidden")}
                    >
                      {responsiveTabs[tab]}
                    </li>
                  );
                })}
              </Dropdown>
            )}
          </ul>
        </Container>
      </div>
      <Container className={styles.category_items}>
        {<SubMenuLinks menuname={menuName}  searchtabs={props.searchtabs}/>}
        <div className={styles.all_course}>
          VIEW ALL COURSES <RightArrowIcon color="#0052cc" />
        </div>
      </Container>
    </>
  );
};

export default MenuLinks;
