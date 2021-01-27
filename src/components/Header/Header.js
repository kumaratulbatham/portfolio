import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';

import LogoComponent from '../logo';


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
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
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  bigIndicator: {
    height: 0
  },
  tabsCss: {
    height: 30,
    width: "100%",
    textAlign: 'right'
  }
});

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: window.location.pathname === '/portfolio/' ? '/home' : window.location.pathname,
      classes: this.props,
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <React.Fragment>
        <AppBar
          component="div"
          className={this.props.classes.secondaryBar}
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
                <Grid container alignItems="flex-start" style={{ paddingTop: 4 }} spacing={3}>

                  <Tabs classes={{ indicator: this.props.classes.bigIndicator }} className={this.props.classes.tabsCss} value={this.state.value} onChange={this.handleChange} >
                    <Tab style={{ padding: 0, width: 100 }} className="myColor" textColor="inherit" value="/portfolio/home" to="/home" component={Link} label="Home"></Tab>
                    <Tab style={{ padding: 0, width: 100 }} className="myColor" textColor="inherit" value="/portfolio/contact" to="/contact" component={Link} label="Contact Us"></Tab>
                    <Tab style={{ padding: 0, width: 100 }} className="myColor" textColor="inherit" value="/portfolio/about" to="/about" component={Link} label="About Us"></Tab>
                    {/* <Tab style={{ padding: 0, width: 100 }} className="myColor" textColor="inherit" value="/new" to="/new" component={Link} label="New Page"></Tab> */}
                  </Tabs>
                </Grid>
              </Grid>
            </Grid>

          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);