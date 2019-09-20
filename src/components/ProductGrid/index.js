import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Img } from '../../utils/styles';
import Product from './Product';
import { Typography } from '@material-ui/core';

const ProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    resolutions(width: 250, height: 250) {
                      ...GatsbyImageSharpResolutions_withWebp
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={node.id}>
            <Product
              productNode={node}
              linkProps={{ to: `/product/${node.handle}/` }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductGrid;
