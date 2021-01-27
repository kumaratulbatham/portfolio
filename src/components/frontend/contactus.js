import React from "react";
import { List, ListItemText, ListItem, Link, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import * as Constants from "../../shared/constants";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    // [theme.breakpoints.up(400 + theme.spacing(6))]: {
    //   width: 400,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  paper: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});

const ContactUs = (props) => {
  const { classes } = props;
  const preventDefault = (event) => event.preventDefault();

  return (
    <main className={classes.main}>
      <Grid container className={classes.paper} spacing={3}>
        <Grid item xs={12}>
          <Typography style={{ marginBottom: 30 }} component="h1" variant="h5">
            Contact Us
          </Typography>
          <Typography component="h1" variant="h3">
            {Constants.NAME}
          </Typography>
          <List dense={false}>
            <ListItem style={{ padding: 0 }}>
              <ListItemText style={{ textAlign: "center", margin: 0 }}>
                <b>Address:</b> {Constants.CURRENT_ADDRESS}
              </ListItemText>
            </ListItem>
            <ListItem style={{ padding: 0 }}>
              <ListItemText style={{ textAlign: "center", margin: 0 }}>
                <b>Phone:</b> (+91){Constants.MOBILE_NO}, (+91)
                {Constants.ALTERNATE_MOBILE_NO}
              </ListItemText>
            </ListItem>
            <ListItem style={{ padding: 0 }}>
              <ListItemText style={{ textAlign: "center", margin: 0 }}>
                <b>Email:</b>{" "}
                <Link
                  target="_blank"
                  href="mailto:atulkumarbatham06@gmail.com"
                  onClick={preventDefault}
                >
                  {Constants.EMAIL}
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem style={{ padding: 0 }}>
              <ListItemText style={{ textAlign: "center", margin: 0 }}>
                <b>LinkedIn:</b>{" "}
                <Link
                  target="_blank"
                  href={Constants.LINKEDIN_URL}
                  onClick={preventDefault}
                >
                  {Constants.LINKEDIN_URL}
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </main>
  );
};

export default withStyles(styles)(ContactUs);
