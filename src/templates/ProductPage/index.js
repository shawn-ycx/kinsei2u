import React from 'react';
import { graphql } from 'gatsby';

import Slider from 'react-slick';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

import ProductForm from '../../components/ProductForm';
import { Img } from '../../utils/styles';

import '../../assets/carousel-styles/slick.css';
import '../../assets/carousel-styles/slick-theme.css';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  const sliderConfig = {
    customPaging: function(i) {
      return (
        <a>
          <Img
            fluid={product.images[i].localFile.childImageSharp.fluid}
            alt={product.title}
          />
        </a>
      );
    },
    fade: true,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={12} md={6} item>
          <Box
            component="div"
            maxWidth={450}
            margin="0 auto"
            border="1px solid #ececea"
          >
            <Slider {...sliderConfig}>
              {product.images.map(x => (
                <div>
                  <Img
                    fluid={x.localFile.childImageSharp.fluid}
                    key={x.id}
                    alt={product.title}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid xs={12} md={6} item>
          <Typography variant="h6" style={{ fontWeight: 300 }} gutterBottom>
            {product.title}
          </Typography>
          <ProductForm product={product} />
        </Grid>
      </Grid>

      <Box display="flex" flex={1} mt={4} flexDirection="column">
        <Paper style={{ padding: '1em', minHeight: '250px' }}>
          <Typography variant="h3" gutterBottom>
            Product Description
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        </Paper>
      </Box>
    </>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              src
              srcSet
              originalImg
              originalName
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`;

export default ProductPage;
