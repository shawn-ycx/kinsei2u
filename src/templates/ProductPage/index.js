import React from 'react';
import { graphql } from 'gatsby';
import { Flex, Box } from 'rebass';
import ProductForm from '../../components/ProductForm';
import { Img } from '../../utils/styles';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'gatsby-image';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  return (
    <Flex flexWrap="wrap">
      <Box pr={[null, 3]} width={[1, 1 / 2]} height={100}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={product.images.length || 0}
        >
          <Slider>
            {product.images.map((x, idx) => (
              <Slide index={idx} key={x.id}>
                <Img
                  fluid={x.localFile.childImageSharp.fluid}
                  alt={product.title}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </Box>
      <Box width={[1, 1 / 2]}>
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <ProductForm product={product} />
      </Box>
    </Flex>
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
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ProductPage;
