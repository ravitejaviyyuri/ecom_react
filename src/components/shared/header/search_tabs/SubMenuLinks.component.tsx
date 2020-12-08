import React from "react";

const SubMenuLinks = (props: any) => {
  const links: any = {
    masters: ["item1", "item2", "item3"],
    new: ["item1", "item2", "item3", "item4", "item5"],
    cc: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    ai: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    trending: ["item1", "item2", "item3", "item4", "item5"],
    devops: ["item1", "item2", "item3", "item4", "item5", "item6"],
    ds: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    bd: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    bi: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    pf: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
    block: [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
    ],
  };

  const selectMenu = (name: string) => {
    console.log("select submenu " + name);
  };

  return (
    <div>
      <ul id="sub-menu">
        {links[props.menuname].map((value: any, index: any) => {
          return (
            <li key={index} onClick={() => selectMenu(props.menuname)}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenuLinks;
