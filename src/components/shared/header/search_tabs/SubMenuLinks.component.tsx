import React from "react";

const SubMenuLinks = (props: any) => {
  const links: any = {
    masters:props.searchtabs['Masters Program'],
    new: props.searchtabs['New Launches'],
    cc: props.searchtabs['Cloud Computing'],
    ai: props.searchtabs['Artificial Intelligence'],
    trending: props.searchtabs['Trending Courses'],
    devops: props.searchtabs['DevOps'],
    ds: props.searchtabs['Data Science'],
    bd: props.searchtabs['Big Data'],
    bi: props.searchtabs['BI & Visualization'],
    pf: props.searchtabs['Programming & Frameworks'],
    block: props.searchtabs['Blockchain'],
  };

  const selectMenu = (name: string) => {
    //console.log("select submenu " + name);
  };

  return (
    <div>
      <ul id="sub-menu">
        {links[props.menuname].map((value: any, index: any) => {
          return (
            <li key={index} onClick={() => selectMenu(props.menuname)}>
              <a href= {"\\" + `${value.slug}`} >{value.display_title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenuLinks;
