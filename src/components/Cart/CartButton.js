import React, { useContext, useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import PropTypes from 'prop-types';
import StoreContext from '../../context/StoreContext';

import { IconButton } from 'gatsby-theme-material-ui';
import { withStyles, makeStyles } from '@material-ui/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
    backgroundColor: 'yellow',
  },
}))(Badge);

const countQuantity = lineItems =>
  lineItems.reduce((total, item) => total + item.quantity, 0);

const CartButton = ({ siteTitle, click }) => {
  const context = useContext(StoreContext);
  const { checkout } = context;
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  );
  const classes = useStyles();

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  return (
    <IconButton
      color="primary"
      className={classes.button}
      aria-label="add to shopping cart"
      onClick={click}
    >
      <StyledBadge badgeContent={quantity}>
        <MdShoppingCart />
      </StyledBadge>
    </IconButton>
  );
};

CartButton.propTypes = {
  siteTitle: PropTypes.string,
};

CartButton.defaultProps = {
  siteTitle: ``,
};

export default CartButton;
