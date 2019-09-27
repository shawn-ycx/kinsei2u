import React from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql } from 'gatsby'

import '../../assets/carousel-styles/slick.css'
import '../../assets/carousel-styles/slick-theme.css'
import GatsbyLink from 'gatsby-link'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    border: `1px solid red`,
    width: `100%`,
    height: `400px`,
    marginBottom: `1em`,
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}))

const Promotions = () => {
  const classes = useStyles()

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
  `)

  return (
    <div className={classes.container}>
      <img
        src="http://www.futurebusinesses.info/wp-content/uploads/2018/12/Cultural-Strategies-for-Alignment-of-Sales-and-Marketing.jpg"
        className={classes.img}
      />
    </div>
  )

  // return (
  //   <Slider style={{ height: '250px' }}>
  //     {data.allShopifyCollection.edges.map(({ node: promo }) => (
  //       <GatsbyLink to={promo.handle}>{promo.title}</GatsbyLink>
  //     ))}
  //   </Slider>
  // );
}

export default Promotions
