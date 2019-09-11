import React, { useContext } from 'react';

import StoreContext from '../../context/StoreContext';
import LineItem from './LineItem';
import EmptyCart from './EmptyCart';
import {
  Typography,
  Box,
  makeStyles,
  Button,
  Divider,
  List,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.grey,
    flexBasis: '60%',
    fontSize: '0.9rem',
    textAlign: 'right',
  },
  labelContent: {
    color: theme.palette.primary,
    flexBasis: '40%',
    textAlign: 'right',
  },
}));

const countQuantity = lineItems =>
  lineItems.reduce((total, item) => total + item.quantity, 0);

const Cart = () => {
  const classes = useStyles();
  const context = useContext(StoreContext);
  const { checkout } = context;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  const quantity = countQuantity(checkout.lineItems);

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />;
  });

  if (!checkout.lineItems.length) {
    return <EmptyCart />;
  }

  return (
    <Box p={2}>
      <Typography variant="h5">Your Cart</Typography>
      <Typography variant="subtitle1">Items in cart: {quantity}</Typography>
      <List>{line_items}</List>
      <Box display="flex" flexDirection="column" mt={2}>
        <Box display="flex" mb={1}>
          <span className={classes.label}>Subtotal: </span>
          <strong className={classes.labelContent}>
            $ {checkout.subtotalPrice}
          </strong>
        </Box>
        <Box display="flex" mb={1}>
          <span className={classes.label}>Taxes: </span>
          <strong className={classes.labelContent}>
            $ {checkout.totalTax}
          </strong>
        </Box>
        <Box display="flex" mb={1}>
          <span className={classes.label}>Shipping (Malaysia Only): </span>
          <strong className={classes.labelContent}>FREE</strong>
        </Box>
        <Divider variant="middle" />
        <Box display="flex" mt={1} mb={2}>
          <span className={classes.label}>Total: </span>
          <strong className={classes.labelContent}>
            $ {checkout.totalPrice}
          </strong>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            fullWidth
          >
            Check out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
