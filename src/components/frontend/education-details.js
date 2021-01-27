import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper, Typography, Grid } from "@material-ui/core";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";

const styles = (theme) => ({
  main: {
    width: "500 !important",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //   width: 400,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
      theme.spacing(3)
    }px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paddingOn: {
    padding: "6px 16px",
    margin: "13px 0 13px 0",
  },
});

const EducationDetails = (props) => {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <Grid container className={classes.paper} spacing={3}>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2008-2009
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paddingOn}>
                <Typography variant="h6" component="h1">
                  High School
                </Typography>
                <Typography>
                  G S R S Higher Secondary School Mohammadabad
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2010-2011
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paddingOn}>
                <Typography variant="h6" component="h1">
                  Inntermediate
                </Typography>
                <Typography>
                  B V I C Inter College Mohammadabad Farrukhabad
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2013-2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              {/* <TimelineConnector className={classes.secondaryTail} /> */}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paddingOn}>
                <Typography variant="h6" component="h1">
                  B. Tech (Computer Science Engineering)
                </Typography>
                <Typography>
                  Dr. A.P.J. Abdul Kalam Technical University, Lucknow
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </main>
  );
};

export default withStyles(styles)(EducationDetails);
