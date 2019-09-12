import React, { useContext } from 'react'
import StoreContext from '../../../context/StoreContext'
import {
  Box,
  styled,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  ListItemSecondaryAction,
} from '@material-ui/core'
import { Button } from 'gatsby-theme-material-ui'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props
  const [quantity, setQuantity] = React.useState(line_item.quantity)

  React.useEffect(() => {
    setQuantity(line_item.quantity)
  }, [line_item.quantity])

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions ? (
    <>
      {line_item.variant.selectedOptions.map(option => {
        return `${option.name}: ${option.value} `
      })}
    </>
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  const handleQtyChange = e => {
    setQuantity(e.target.value)
  }

  const handleQtySubmit = e => {
    if (e.key === 'Enter') {
      if (quantity === 0) {
        context.removeLineItem(
          context.client,
          context.checkout.id,
          line_item.id
        )
        return
      }
      context.updateLineItem(
        context.client,
        context.checkout.id,
        line_item.id,
        quantity
      )
    }
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>{variantImage}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="body2" style={{ maxWidth: '30ch' }}>
            {line_item.title}
          </Typography>
        }
        secondary={
          <>
            {selectedOptions} <br />
            <Button
              color="secondary"
              style={{
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              onClick={handleRemove}
            >
              Remove
            </Button>
          </>
        }
      />
      <ListItemSecondaryAction>
        <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Qty"
          value={quantity}
          onChange={handleQtyChange}
          onKeyPress={handleQtySubmit}
          inputProps={{
            size: 1,
          }}
          InputProps={{
            style: {
              height: 40,
            },
          }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default LineItem
