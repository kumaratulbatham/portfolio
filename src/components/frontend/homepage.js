import React from "react";
import {
  Grid,
  Link,
  List,
  ListItemText,
  ListItem,
  Typography,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import logo from "../../../src/assets/images/atul_kumar.jpg";
import resume from "../../../src/assets/images/Atul_resume_Cambria.docx";
import * as Constants from "../../shared/constants";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //     width: 400,
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // },
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
      theme.spacing(3)
    }px`,
  },
  homepageContainer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: 15,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});

const HomePage = (props) => {
  const { classes } = props;

  const preventDefault = (event) => event.preventDefault();

  return (
    <main className={classes.main}>
      {/* <Paper className={classes.paper}> */}
        <Grid container className={classes.homepageContainer}  spacing={3}>
          <Grid item xs={3}>
            <Grid
              container
              style={{ textAlign: "center", display: "block" }}
              spacing={3}
            >
              <img
                style={{ width: 250, height: 250, borderRadius: 125, border: "5px solid #48484a" }}
                src={logo}
                alt="logo"
              ></img>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              style={{ textAlign: "center", display: "block" }}
              alignItems="center"
              spacing={3}
            >
              <Typography color="inherit" variant="h3">
                {Constants.NAME}
              </Typography>
              <Typography color="inherit" variant="h6">
                Software Engineer
              </Typography>
              <Typography variant="body1" gutterBottom>
                Currently working as Software Engineer at{" "}
                {Constants.CURRENT_COMPANY}
                <br></br>I have {Constants.TOTAL_EXPERIENCE}+ years of
                experience in different Client side Technologies.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Working on Client Side Technologies Angular-6, Angular-7,
                Angular-8, <br />
                JavaScript, TypeScript, React-JS, Redux, RxJs, HTML5, CSS3
              </Typography>
              <Link target="_blank" href={resume} onClick={preventDefault}>
                Download Resume
              </Link>

              <List dense={false}>
                <ListItem style={{ padding: 0 }}>
                  <ListItemText style={{ textAlign: "center", margin: 0 }}>
                    <b>Years of Experience:</b> {Constants.TOTAL_EXPERIENCE}+
                    Years
                  </ListItemText>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <ListItemText style={{ textAlign: "center", margin: 0 }}>
                    <b>Date Of Birth:</b> {Constants.DATE_OF_BIRTH}
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
                    <b>LinkedIn Profile:</b>{" "}
                    <Link
                      target="_blank"
                      href={Constants.LINKEDIN_URL}
                      onClick={preventDefault}
                    >
                      {Constants.LINKEDIN_URL}
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <ListItemText style={{ textAlign: "center", margin: 0 }}>
                    <b>GitHub Repository:</b>{" "}
                    <Link
                      target="_blank"
                      href={Constants.GITHUB_URL}
                      onClick={preventDefault}
                    >
                      {Constants.GITHUB_URL}
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <ListItemText style={{ textAlign: "center", margin: 0 }}>
                    <b>Facebook Profile:</b>{" "}
                    <Link
                      target="_blank"
                      href={Constants.FACEBOOK_URL}
                      onClick={preventDefault}
                    >
                      {Constants.FACEBOOK_URL}
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem style={{ padding: 0 }}>
                  <ListItemText style={{ textAlign: "center", margin: 0 }}>
                    <b>Address:</b> {Constants.CURRENT_ADDRESS}
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </main>
  );
}

export default withStyles(styles)(HomePage);
