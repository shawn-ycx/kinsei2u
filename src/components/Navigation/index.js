import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Button, GatsbyLink } from 'gatsby-theme-material-ui';

import { MdFace } from 'react-icons/md';
import CartButton from '../Cart/CartButton';
import { useScrollTrigger, CssBaseline } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    fontSize: '1.5em',
  },
}));

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Navigation = ({ cartHandler, controller, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="sticky"
          className={clsx([controller, classes.appbar])}
        >
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.logo}>
                <MdFace />
              </Link>
            </Typography>
            <Button component={GatsbyLink} to="/contact-us">
              <Typography>Contact Us</Typography>
            </Button>
            <CartButton click={cartHandler} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Navigation;
