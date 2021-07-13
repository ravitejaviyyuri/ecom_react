import React from "react";

export const CopyIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.3 469.3">
      <path
        fill={props.color}
        d="M330.7 0h-256C51.1 0 32 19.1 32 42.7v298.7h42.7V42.7h256V0z"
      />
      <path
        fill={props.color}
        d="M394.7 85.3H160c-23.6 0-42.7 19.1-42.7 42.7v298.7c0 23.6 19.1 42.7 42.7 42.7h234.7c23.6 0 42.7-19.1 42.7-42.7V128c-.1-23.6-19.2-42.7-42.7-42.7zm0 341.4H160V128h234.7v298.7z"
      />
    </svg>
  );
};
