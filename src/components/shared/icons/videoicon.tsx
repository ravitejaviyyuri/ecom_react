import React from "react";

export const VideoIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        d="M511.6 18.7c-275.7 0-494.8 219.1-494.8 494.8s219.1 494.8 494.8 494.8 494.8-219.1 494.8-494.8c7-275.7-219.1-494.8-494.8-494.8zM377.3 718.4v-410l353.4 205-353.4 205z"
        fill={props.color}
      />
    </svg>
  );
};
