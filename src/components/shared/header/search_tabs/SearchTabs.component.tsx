import React , {Component} from "react";
import SubMenuLinks from "./SubMenuLinks.component";
import styles from './searchtabs.module.scss'

import _ from "lodash";
// import "../css/random.css";

export default class MenuLinks extends Component<any , any> {
  myRef: React.RefObject<HTMLInputElement>;
  constructor(props: any, context: any) {
    super(props, context);
    this.myRef = React.createRef();
    this.state = {
      active: 0,
      style: {},
      myRef: React.createRef(),
      tabs: {
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
        block: "BlockChain"
      },
      clicked: false,
      menuname: "masters",
      responsiveTabs: {},
      clientWidth: 0,
      dropdownStatus: false
    };

    this.selectMenu = this.selectMenu.bind(this);
    this.spliceTabs = this.spliceTabs.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.update = this.update.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState(
      (state: any, props: any) => {
        return {
          clientWidth: this.state.myRef.current.clientWidth
        };
      },
      () => {
        console.log(this.state.clientWidth);
        this.spliceTabs();
        window.addEventListener("resize", _.throttle(this.update, 1000));
      }
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("resize", _.throttle(this.update, 1000));
  }

  spliceTabs() {
    console.log("splicetabs")
    let totalWidth = 0;
    let barWidth = this.state.clientWidth - 44;
    const el = document.getElementsByClassName("tab_list_pic");
    console.log(el);
    for (let i = 0; i < el.length; i++) {
      const tabWidth = el[i].clientWidth;
      // 44 = dropdown toggle width
      if (i === el.length - 1) {
        barWidth += 44;
      }
      console.log(el[i].id);
      console.log(tabWidth);
      console.log(totalWidth);
      console.log(barWidth);
      if (totalWidth + tabWidth > barWidth) {
        const tabs = this.state.tabs;
        let key = el[i].id;
        this.setState(
          (          prevState: { responsiveTabs: any; }) => {
            let responsiveTabs = { ...prevState.responsiveTabs };
            responsiveTabs[key] = tabs[el[i].id];
            return { responsiveTabs };
          },
          () => {
            console.log(this.state);
            this.setStyle();
            delete this.state.tabs[el[i].id];
          }
        );
      }
      totalWidth += tabWidth;
    }


    this.setStyle();
  }

  setStyle = () => {
    const { active, tabs } = this.state;
    let width = null;
    let left = 0;
    if (active < tabs.length) {
      const el = document.getElementsByClassName("tab_list_pic");

      for (let i = 0; i < el.length; i++) {
        let tabWidth = el[i].clientWidth;
        if (i === active) {
          width = tabWidth;
          break;
        } else {
          left += tabWidth;
        }
      }
    }

    this.setState({
      style: { width, left }
    });
  };

  update = () => {
    console.log("update")
    this.setState(
      {
        tabs: { ...this.state.tabs, ...this.state.responsiveTabs },
        responsiveTabs: {},
        clientWidth: this.state.myRef.current.clientWidth
      },
      () => {
        console.log(this.state.tabs);
        console.log(this.state.responsiveTabs);
        this.spliceTabs();
      }
    );
  };

  selectMenu(name: string, menu: string) {
    this.setState((state: { tabs: any; responsiveTabs: any; }, props: any) => {
      let reorderedtab;
      let reordereresponsivetab;
      if(menu=="hidden"){
        let tabs = state.tabs;
        let deletedLastkey = Object.keys(tabs)[Object.keys(tabs).length - 1];
        let deletedLastValue = tabs[deletedLastkey];
        delete tabs[deletedLastkey];
        let responsiveTabs = state.responsiveTabs;
        reorderedtab = {
          [name]: responsiveTabs[name]
        };

        reorderedtab = { ...reorderedtab, ...tabs };
        console.log(reorderedtab);

        reordereresponsivetab = {
          [deletedLastkey]: deletedLastValue
        };
        console.log(reordereresponsivetab);
        delete responsiveTabs[name];

        console.log(responsiveTabs);

        reordereresponsivetab = { ...reordereresponsivetab, ...responsiveTabs };
      }else{
        reorderedtab = state.tabs;
        reordereresponsivetab = state.responsiveTabs;
      }
      this.setStyle();

      return {
        clicked: true,
        menuname: name,
        tabs: reorderedtab,
        responsiveTabs: reordereresponsivetab
      };
    });
  }

  toggleDropdown = () => {
    this.setState((prevState: { dropdownStatus: any; }) => {
      return { dropdownStatus: !prevState.dropdownStatus };
    });
  };

  changeTab = (index: any) => {
    this.setState({ active: index, dropdownStatus: false }, () => {
      this.setStyle();
    });
  };

  render() {
    const {
      active,
      style,
      tabs,
      responsiveTabs,
      dropdownStatus,
      width,
      height
    } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <ul id="menu" ref={this.state.myRef} className={styles.search_list_tab}>
          {Object.keys(this.state.tabs).map((name, index) => {
            return (
              <li
                key={name}
                id={name}
                className={`tab_list_pic ${styles.tab__item} ${active === index ? "active" : ""}`}
                onClick={() => this.selectMenu(name, "main")}
              >
                {this.state.tabs[name]}
              </li>
            );
          })}
          {Object.keys(responsiveTabs).length > 0 && (
            <Dropdown
              active={dropdownStatus}
              toggleDropdown={() => this.toggleDropdown()}
            >
              {Object.keys(responsiveTabs).map((tab, index) => {
                const tabIndex = Object.keys(tabs).length + index;
                return (
                  <li
                    id={tab}
                    key={tab}
                    className={`tab_list_pic ${styles.tab__item} ${
                      tabIndex === active ? "active" : ""
                    }`}
                    onClick={() => this.selectMenu(tab, "hidden")}
                  >
                    {responsiveTabs[tab]}
                  </li>
                );
              })}
            </Dropdown>
          )}
        </ul>
        {<SubMenuLinks menuname={this.state.menuname} />}
      </React.Fragment>
    );
  }
}


class Dropdown extends Component<any, any> {
  toggleDropdown = () => {
    this.props.toggleDropdown();
  };

  render() {
    const { children, active } = this.props;
    return (
      <div className={styles.dropdown__wrapper}>
        <a
          className={styles.dropdown__toggle}
          href="#"
          onClick={this.toggleDropdown}
          data-toggle="dropdown"
        >
          ...
        </a>
        <ul id="hidden-menu" className={`${styles.dropdown} ${active ? styles.active : ""}`}>
          {children}
        </ul>
      </div>
    );
  }
}
