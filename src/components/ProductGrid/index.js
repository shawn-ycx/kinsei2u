import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Flex, Box } from 'rebass'
import { Img } from '../../utils/styles'
import { Grid, Container, Typography } from '@material-ui/core'

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
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
  )

  return (
    <Container>
      <Grid container spacing={3}>
        {data.allShopifyProduct.edges.map(x => (
          <Grid item xs={3}>
            <Link to={`/product/${x.node.handle}/`}>
              <Img
                fluid={x.node.images[0].localFile.childImageSharp.fluid}
                alt={x.node.handle}
              />
            </Link>
            <p>{x.node.title}</p>
          </Grid>
        ))}
        {data.allShopifyProduct.edges.map(x => (
          <Grid item xs={3}>
            <Link to={`/product/${x.node.handle}/`}>
              <Img
                fluid={x.node.images[0].localFile.childImageSharp.fluid}
                alt={x.node.handle}
              />
            </Link>
            <p>{x.node.title}</p>
          </Grid>
        ))}
        {data.allShopifyProduct.edges.map(x => (
          <Grid item xs={3}>
            <Link to={`/product/${x.node.handle}/`}>
              <Img
                fluid={x.node.images[0].localFile.childImageSharp.fluid}
                alt={x.node.handle}
              />
            </Link>
            <p>{x.node.title}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductGrid
