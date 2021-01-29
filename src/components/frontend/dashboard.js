import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import * as Constants from '../../shared/constants';

import logo from "../../../src/assets/images/atul_kumar.jpg";
import resume from "../../../src/assets/images/Atul_resume_Cambria.docx";


const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //   width: 400,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
    //   theme.spacing.unit * 3
    // }px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 1SignIn1 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

const Dashboard = (props) => {
  return (
    <div>
      <div className="row add-margin">
        <div style={{marginTop: 20}} className="col-sm-3">
          <img style={{width: 250, height: 250, borderRadius : 125, border: "5px solid #48484a"}} src={logo} alt="logo"></img>
        </div>
        <div className="col-sm-9">
          <h1>{Constants.NAME}</h1>
          <b>Software Engineer</b>
          <p>
            Currently working as Software Engineer at {Constants.CURRENT_COMPANY}
            <br></br>I have {Constants.TOTAL_EXPERIENCE}+ years of experience in different Client side
            Technologies.
          </p>
          <p>
            Working on Client Side Technologies Angular-6, Angular-7, Angular-8,
            JavaScript, TypeScript, React-JS, Redux, RxJs, HTML5, CSS3
          </p>
          <a href={resume} rel="noopener noreferrer" target="_blank">
            Download Resume
          </a>
          <ul style={{listStyle: 'none'}} className="list-unstyled">
            <li>
              <b>Years of Experience:</b> {Constants.TOTAL_EXPERIENCE}+ Years
            </li>
            <li>
              <b>Date Of Birth:</b> {Constants.DATE_OF_BIRTH}
            </li>
            <li>
              <b>Phone:</b> (+91){Constants.MOBILE_NO}, (+91){Constants.ALTERNATE_MOBILE_NO}
            </li>
            <li>
              <b>Email:</b>{" "}
              <a
                rel="noopener noreferrer"
                href="mailto:atulkumarbatham06@gmail.com"
              >
                {Constants.EMAIL}
              </a>
            </li>
            <li>
              <b>LinkedIn Profile:</b>{" "}
              <a
                rel="noopener noreferrer"
                href={Constants.LINKEDIN_URL}
                target="_blank"
              >
                {Constants.LINKEDIN_URL}
              </a>
            </li>
            <li>
              <b>GitHub Repository:</b>{" "}
              <a
                rel="noopener noreferrer"
                href={Constants.GITHUB_URL}
                target="_blank"
              >
                {Constants.GITHUB_URL}
              </a>
            </li>
            <li>
              <b>Facebook Page:</b>{" "}
              <a
                rel="noopener noreferrer"
                href={Constants.FACEBOOK_URL}
                target="_blank"
              >
                {Constants.FACEBOOK_URL}
              </a>
            </li>
            <li>
              <b>Address:</b> {Constants.CURRENT_ADDRESS}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
