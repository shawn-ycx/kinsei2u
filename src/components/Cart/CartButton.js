import React, { useContext, useState, useEffect } from 'react';
import {
  MdClose,
  MdShoppingCart,
  MdArrowBack,
  MdArrowForward,
} from 'react-icons/md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import StoreContext from '../../context/StoreContext';

const countQuantity = lineItems =>
  lineItems.reduce((total, item) => total + item.quantity, 0);

const CartButton = ({ siteTitle }) => {
  const context = useContext(StoreContext);
  const { checkout } = context;
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  );

  useEffect(
    () => {
      setQuantity(countQuantity(checkout ? checkout.lineItems : []));
    },
    [checkout]
  );

  return (
    <div>
      <Link to="/cart">
        <MdShoppingCart />
        <div>{quantity}</div>
      </Link>
    </div>
  );
};

CartButton.propTypes = {
  siteTitle: PropTypes.string,
};

CartButton.defaultProps = {
  siteTitle: ``,
};

export default CartButton;
