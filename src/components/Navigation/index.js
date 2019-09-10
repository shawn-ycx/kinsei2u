import React, { useContext, useState, useEffect } from 'react';
import { Flex, Box } from 'rebass';
import {
  MdClose,
  MdShoppingCart,
  MdArrowBack,
  MdArrowForward,
  MdFace,
} from 'react-icons/md';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import StoreContext from '../../context/StoreContext';
import CartButton from '../Cart/CartButton';

const Container = props => (
  <Flex {...props} mx="1em" py="2em" px={2} alignItems="center" />
);

const countQuantity = lineItems =>
  lineItems.reduce((total, item) => total + item.quantity, 0);

const Navigation = ({ siteTitle }) => {
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
    <Container>
      <header>
        <h1>
          <Link to="/">
            <MdFace />
          </Link>
        </h1>
      </header>
      <Box mx="auto" />
      <CartButton />
    </Container>
  );
};

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
