import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Button } from 'gatsby-theme-material-ui'

const EmptyCart = () => {
  return (
    <Container>
      <Typography variant="h4">YOUR BAG IS EMPTY</Typography>
      <Typography variant="subtitle1">
        This bag seems empty. Start filling it!
      </Typography>
      <Button variant="outlined">Continue Shopping</Button>
    </Container>
  )
}

export default EmptyCart
