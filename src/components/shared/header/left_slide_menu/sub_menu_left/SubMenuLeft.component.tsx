import React, { Component } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";

let options = [
  {
    title: "",
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "My courses", to: "/my-courses" }]
  },
  {
    title: "",
    titleIcon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    content: [
      {
        id: 2,
        name: "Web Development",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            title: "JavaScript",
            titleIcon: <i className="fa fa-opera"></i>,
            content: [
              {
                id: 3,
                name: "functions",
                icon: <i className="fa fa-chrome"></i>,
                children: [
                  {
                    content: [
                      {
                        id: 4,
                        name: "functions",
                        icon: <i className="fa fa-chrome"></i>,
                        to: "#"
                      },
                      {
                        id: 5,
                        name: "functfghjions",
                        icon: <i className="fa fa-chrome"></i>,
                        to: "#"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

class SubMenuleft extends Component<any , any> {
  constructor(props:any) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  //   you can also use this function on any of your event to open/close the sidebar
  handleSidebarToggle = (isOpen: any) => {
    this.setState({ isOpen });
  };

  handleClick = (itemOptions: any) => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      
        <MultilevelSidebar
          open={this.state.isOpen}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="React-MultiLevel-Sidebar"
          // onItemClick={this.handleClick}
        />
      
     
    );
  }
}

export default SubMenuleft;