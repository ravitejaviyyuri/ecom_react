import React from "react";

export default class SubMenuLinks extends React.Component<any , any> {
  constructor(props: any, context: any) {
    super(props, context);
    console.log(props);
    this.state = {
      masters: [
        "item1",
        "item2",
        "item3"
      ],
      new: ["item1", "item2", "item3", "item4", "item5"],
      cc: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
      ],
      ai: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
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
        "item8"
      ],
      bd: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
      ],
      bi: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
      ],
      pf: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
      ],
      block: [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8"
      ]
    };

    this.selectMenu = this.selectMenu.bind(this);
  }

  selectMenu(name: string) {
    console.log("select submenu " + name);
  }

  render() {
    return (
      <div>
        <ul id="sub-menu">
          {this.state[this.props.menuname].map((name: {} | null | undefined) => {
            return (
              <li
                // key={name}
                onClick={() => this.selectMenu(this.props.menuname)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
