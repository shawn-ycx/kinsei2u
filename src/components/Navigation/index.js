import React from 'react';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Button, GatsbyLink } from 'gatsby-theme-material-ui';

import { MdFace } from 'react-icons/md';
import CartButton from '../Cart/CartButton';

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

const Navigation = ({ cartHandler, controller }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative" className={controller}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logo}>
              <MdFace />
            </Link>
          </Typography>
          <Button component={GatsbyLink} to="/contact-us">
            <Typography color="textSecondary">Contact Us</Typography>
          </Button>
          <CartButton click={cartHandler} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
