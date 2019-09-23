import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
});

export const defaultStoreContext = {
  client,
  cartOpen: false,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  toggleCartDrawer: () => {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
};

const StoreContext = React.createContext(defaultStoreContext);

export default StoreContext;
