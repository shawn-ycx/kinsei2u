import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreContext from '../../context/StoreContext';
import VariantSelector from './VariantSelector';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { AddToCart } from '../shared/Buttons';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0),
  },
}));

const ProductForm = props => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(props.product.variants[0]);
  const context = useContext(StoreContext);

  const hasVariants = props.product.variants.length > 1;
  const productVariant =
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant;
  const [available, setAvailable] = useState(productVariant.availableForSale);

  useEffect(() => {
    let defaultOptionValues = {};
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0];
    });
    setVariant(defaultOptionValues);
  }, [props.product.options]);

  useEffect(() => {
    const checkAvailability = productId => {
      context.client.product.fetch(productId).then(product => {
        // this checks the currently selected variant for availability
        const result = product.variants.filter(
          variant => variant.id === productVariant.shopifyId
        );
        setAvailable(result[0].available);
      });
    };

    checkAvailability(props.product.shopifyId);
  }, [productVariant, props.product.shopifyId, context.client.product]);

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const handleOptionChange = event => {
    const { target } = event;
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity);
  };

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <VariantSelector
            value={variant[option.name]}
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        );
      })
    : null;

  return (
    <>
      <Typography variant="h4" style={{ fontWeight: 500 }} color="primary">
        RM {productVariant.price}
      </Typography>
      {variantSelectors}
      <Paper className={classes.paper} square>
        <Typography variant="h6" color={available ? 'primary' : 'error'}>
          {available ? 'Stock Available' : 'Sold Out!'}
        </Typography>
        {available && (
          <Typography variant="body2">
            Usually ships in 3 - 10 business days
          </Typography>
        )}
      </Paper>
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1, step: 1, type: 'number' }}
          name="quantity"
          id="quantity"
          margin="dense"
        />
        <AddToCart
          cartArgs={{
            productShopifyId: productVariant.shopifyId,
            quantity,
          }}
          type="submit"
          style={{ marginLeft: '1rem' }}
          disabled={!available}
        />
      </Box>
    </>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
};

export default ProductForm;
