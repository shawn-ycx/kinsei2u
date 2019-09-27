import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },

  subscription: {
    padding: '2em',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box flexGrow={1} marginTop="1em" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.subscription}>
          <Typography variant="h4">Subscribe to Save!</Typography>
        </Grid>
        {/* Help Links */}
        <Grid item xs={4}>
          <Box display="flex" flexDirection="column" padding={2}>
            <ul>
              <li>Contact Us</li>
              <li>Contact Us</li>
              <li>Contact Us</li>
              <li>Contact Us</li>
              <li>Contact Us</li>
              <li>Contact Us</li>
            </ul>
          </Box>
        </Grid>
        {/* Address */}
        <Grid item xs={4}>
          <address>asdasdadasd, asdasdasd, asdasdas ,asdasd a12312344</address>
        </Grid>
        {/* Social */}
        <Grid item xs={4}>
          <ul>
            <li>Fb</li>
            <li>Shopee</li>
            <li>Instagram</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}
