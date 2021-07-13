import React from "react";

export const InfoIcon = (props: any) => {
  return (
    <svg
      id="icon_alert_error_outline_24px"
      data-name="icon/alert/error_outline_24px"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <rect id="Boundary" width="18" height="18" fill="none" />
      <path
        id="_Color"
        data-name=" ↳Color"
        d="M6.993,14A7,7,0,1,1,14,7,7,7,0,0,1,6.993,14ZM7,1.4A5.6,5.6,0,1,0,12.6,7,5.606,5.606,0,0,0,7,1.4Zm.7,9.1H6.3V9.1H7.7v1.4Zm0-2.8H6.3V3.5H7.7V7.7Z"
        transform="translate(2 2)"
        fill={props.color}
      />
    </svg>
  );
};
