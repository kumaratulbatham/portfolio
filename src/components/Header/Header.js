import React from "react";
// import PropTypes from "prop-types";
import { Grid, List, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
// import Tab from "@material-ui/core/Tab";
// import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";

import LogoComponent from "../logo";
import NavItem from "./NavItem";

const lightColor = "rgba(255, 255, 255, 0.7)";

const useStyles = makeStyles((theme) => ({
  secondaryBar: {
    zIndex: 0,
    height: 90,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    width: 110,
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  bigIndicator: {
    height: 0,
  },
  tabsCss: {
    height: 30,
    width: "100%",
    textAlign: "right",
  },
}));

const items = [
  {
    href: "home",
    title: "Home",
  },
  {
    href: "contact",
    title: "Contact Us",
  },
  {
    href: "about",
    title: "About Us",
  },
  {
    href: "new",
    title: "New Page",
  },
];

const Header = () => {
  const classes = useStyles();

  const content = (
    <List style={{ display: "flex", width: "70%" }}>
      {items.map((item) => (
        <NavItem href={item.href} key={item.title} title={item.title} />
      ))}
    </List>
  );

  return (
    <React.Fragment>
      <header>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Grid container style={{ marginTop: 10 }} spacing={3}>
              <Grid item xs={2}>
                <Grid container alignItems="flex-start" spacing={3}>
                  <LogoComponent />
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  alignItems="flex-start"
                  style={{ paddingTop: 4 }}
                  spacing={3}
                >
                  {content}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </React.Fragment>
  );
};

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default Header;
