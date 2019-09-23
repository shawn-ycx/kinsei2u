import React, { useContext } from 'react';
import { Img } from '../../utils/styles';
import GatsbyLink from 'gatsby-link';

import { Button } from 'gatsby-theme-material-ui';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StoreContext from '../../context/StoreContext';
import { AddToCart } from '../shared/Buttons';

const useStyles = makeStyles(theme => ({
  paper: {
    height: '400px',
    maxHeight: '400px',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.textPrimary,
  },
  button: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
}));

const Product = ({ productNode, linkProps }) => {
  const classes = useStyles();
  const context = useContext(StoreContext);

  return (
    <Paper className={classes.paper}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Box textAlign="center" m={0} p={0} width="100%">
          <GatsbyLink className={classes.link} {...linkProps}>
            <Img
              resolutions={
                productNode.images[0].localFile.childImageSharp.resolutions
              }
              alt={productNode.handle}
              style={{ marginBottom: 0 }}
            />
          </GatsbyLink>
        </Box>
        <Box paddingLeft={1} paddingRight={1}>
          <Typography variant="h6" color="secondary">
            {productNode.variants.length > 1 ? (
              <>
                ${Math.min(...productNode.variants.map(({ price }) => price))} -
                ${Math.max(...productNode.variants.map(({ price }) => price))}
              </>
            ) : (
              <>
                ${Math.min(...productNode.variants.map(({ price }) => price))}
              </>
            )}
          </Typography>
          <Typography variant="caption">{productNode.title}</Typography>
        </Box>
        {productNode.variants.length > 1 ? (
          <Button
            className={classes.button}
            component={GatsbyLink}
            color="primary"
            variant="outlined"
            {...linkProps}
          >
            Learn More
          </Button>
        ) : (
          <AddToCart
            fullWidth
            className={classes.button}
            cartArgs={{
              productShopifyId: productNode.variants[0].shopifyId,
              quantity: 1,
            }}
          />
        )}
      </Box>
    </Paper>
  );
};
export default Product;
