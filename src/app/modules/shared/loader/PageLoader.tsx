import React from "react";

export const PageLoader = () => {
  return (
    <div className="global-page-loader page-loading">
      <div id="splash-screen" className="splash-screen">
        <img
          src="/media/logos/logo.png"
          className="dark-logo"
          alt="Metronic dark logo"
        />
        <img
          src="/media/logos/logo-light-mode.png"
          className="light-logo"
          alt="Metronic light logo"
        />
        <span>Loading ...</span>
      </div>
    </div>
  );
};
