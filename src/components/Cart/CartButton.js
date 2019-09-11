import React, { useContext, useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import StoreContext from '../../context/StoreContext';
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/styles';
import { IconButton, GatsbyLink } from 'gatsby-theme-material-ui';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core';

const Cart = styled(Link)`
  & > svg {
    font-size: 2em;
    width: 70px;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }

  & > div {
    content: '';
    position: absolute;
    background: rgba(0, 0, 255, 1);
    height: 1.5rem;
    top: 2.2rem;
    right: 1rem;
    width: 1.5rem;
    text-align: center;
    line-height: 1;
    font-size: 1rem;
    border-radius: 50%;
  }
`;

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

  useEffect(
    () => {
      setQuantity(countQuantity(checkout ? checkout.lineItems : []));
    },
    [checkout]
  );

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
