import React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar,
  Box,
  AppBar,
  Container,
  useScrollTrigger,
  Zoom,
  makeStyles,
  Typography,
  Fade,
} from '@material-ui/core';
import styled from 'styled-components';
import { Button } from 'gatsby-theme-material-ui';
import { MdFace } from 'react-icons/md';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  input: {
    display: 'none',
  },
}));

const TransitionAppBar = styled(AppBar)`
  transition: all 300ms 100ms;
`;

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
