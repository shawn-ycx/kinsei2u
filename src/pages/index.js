import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`kinsei`, `laptop`, `computer`]} />
    <ProductGrid />
  </>
)

export default IndexPage
