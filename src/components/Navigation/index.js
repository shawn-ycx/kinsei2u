import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Button, IconButton } from 'gatsby-theme-material-ui';

import { MdFace, MdMenu } from 'react-icons/md';
import CartButton from '../Cart/CartButton';
import { useScrollTrigger, CssBaseline, Box, Fade } from '@material-ui/core';
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles';

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
  logo: {
    verticalAlign: 'middle',
    fontSize: '2em',
  },
  menu: {
    marginRight: '.5rem',
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
          <Toolbar variant="dense" style={{ padding: '.5rem 1rem' }}>
            <Box
              component={IconButton}
              className={classes.menu}
              display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}
            >
              <MdMenu />
            </Box>
            <Link to="/" className={classes.root}>
              <MdFace className={classes.logo} />
            </Link>
            {/* <Button component={GatsbyLink} to="/contact-us">
              <Typography>Contact Us</Typography>
            </Button> */}
            <CartButton click={cartHandler} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Navigation;
