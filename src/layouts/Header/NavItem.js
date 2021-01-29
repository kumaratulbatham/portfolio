import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.background.default,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    // padding: '10px 8px',
    textTransform: 'none',
    // width: '40',
    "&:hover": {
      color: theme.palette.background.default,
    }
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto',
    color: theme.palette.background.default
  },
  padding: {
    padding: 0,
    width: '100%'
  },
  active: {
    color: theme.palette.background.default,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <ListItem
      className={classes.padding}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {title}
      </Button>
    </ListItem>
  );
};

// NavItem.propTypes = {
//   className: PropTypes.string,
//   href: PropTypes.string,
//   icon: PropTypes.elementType,
//   title: PropTypes.string
// };

export default NavItem;
