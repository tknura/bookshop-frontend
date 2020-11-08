import React from 'react'
import { Box, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { useCartContext } from 'components/providers/CartContextProvider'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftBox: {
    display: 'flex',
    alignItems: 'center',
  },
  rightBox: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    maxWidth: 30,
  },
}))

const CartItem = ({ item, onDelete, onChangeAmount }) => {
  const classes = useStyles()
  const { getAmountOfItem } = useCartContext()

  return (
    <Box className={classes.root}>
      <Box className={classes.leftBox}>
        <IconButton onClick={() => onDelete(item)}>
          <RemoveCircleRoundedIcon />
        </IconButton>
        <Typography variant="body1">
          {`${item.name} - ${item.detail}`}
        </Typography>
      </Box>
      <Box className={classes.rightBox}>
        <IconButton disabled={getAmountOfItem(item) === 1} size="small" onClick={() => onChangeAmount(item, -1)}>
          <RemoveRoundedIcon />
        </IconButton>
        <TextField
          size="small"
          value={getAmountOfItem(item)}
          className={classes.textField}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
        />
        <IconButton size="small" onClick={() => onChangeAmount(item, 1)}>
          <AddRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export { CartItem }
