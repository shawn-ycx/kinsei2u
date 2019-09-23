import React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar,
  AppBar,
  Container,
  useScrollTrigger,
  Typography,
  Fade,
} from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const ActionNav = props => {
  const trigger = useScrollTrigger({
    target: props.window ? props.window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Fade in={trigger}>
          <Typography variant="h6" style={{ letterSpacing: '2px' }}>
            KINSEI
          </Typography>
        </Fade>
        <Container>
          <Button>Shop</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default ActionNav;
