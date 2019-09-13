import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdShoppingBasket } from 'react-icons/md';

const EmptyCart = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <MdShoppingBasket style={{ fontSize: '10em' }} />
      <Typography variant="h4">YOUR BAG IS EMPTY</Typography>
      <Typography variant="subtitle1">
        This bag seems empty. Start filling it!
      </Typography>
    </Box>
  );
};

export default EmptyCart;
