import React, { useState, useEffect } from "react";
import LoginNav from "./LoginNav.component";
import SignoutNav from "./SignoutNav.component";

const LoginSignoutNav = (props: any) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoginNav />;
  }
  return (
    <SignoutNav
      setLoginSignup={props.setLoginSignup}
    />
  );
};

export default LoginSignoutNav;
