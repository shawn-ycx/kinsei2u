import React from 'react';
import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby';

import '../../assets/carousel-styles/slick.css';
import '../../assets/carousel-styles/slick-theme.css';
import GatsbyLink from 'gatsby-link';
import { Paper, Container, Box } from '@material-ui/core';

const Promotions = () => {
  const sliderConfig = {};

  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection {
        edges {
          node {
            title
            handle
          }
        }
      }
    }
  `);

  return (
    <Slider style={{ height: '250px' }}>
      {data.allShopifyCollection.edges.map(({ node: promo }) => (
        <GatsbyLink to={promo.handle}>{promo.title}</GatsbyLink>
      ))}
    </Slider>
  );
};

export default Promotions;
