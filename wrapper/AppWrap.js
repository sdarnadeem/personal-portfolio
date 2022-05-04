import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC(...props) {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* <SocialMedia /> */}
        <div className="app__wrapper app__flex">
          <Component {...props} />
          {/* <div className="copyright app__flex" style={copyrightStyle}>
            <p className="p-text">@2020 Nasyx</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
