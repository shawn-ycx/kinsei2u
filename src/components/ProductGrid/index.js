import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Img } from '../../utils/styles';

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
    <Container>
      <Grid container spacing={3}>
        {data.allShopifyProduct.edges.map(x => (
          <Grid item xs={3} key={x.node.id}>
            <Link to={`/product/${x.node.handle}/`}>
              <Img
                resolutions={
                  x.node.images[0].localFile.childImageSharp.resolutions
                }
                alt={x.node.handle}
              />
            </Link>
            <p>{x.node.title}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
