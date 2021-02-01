import React from "react";
import { makeStyles } from "@material-ui/core";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#FCFCFC",
    // display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
