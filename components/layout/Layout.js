import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
};

export default Layout;
