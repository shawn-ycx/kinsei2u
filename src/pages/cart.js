import React from 'react'

import Cart from '../components/Cart'
import { Typography, Container } from '@material-ui/core'

const CartPage = () => (
  <Container>
    <Typography variant="h2">Cart</Typography>
    <Cart />
  </Container>
)

export default CartPage
