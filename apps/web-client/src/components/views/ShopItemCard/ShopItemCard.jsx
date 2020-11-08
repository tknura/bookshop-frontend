import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useCartContext } from 'components/providers/CartContextProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
  innerCardBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    alignItems: 'flex-end',
  },
  fab: {
    margin: theme.spacing(1),
  },
}))

const ShopItemCard = ({ item }) => {
  const classes = useStyles()
  const { addToCart } = useCartContext()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
      />
      <Box className={classes.innerCardBox}>
        <CardContent>
          <Typography variant="h6" color="primary" component="h2">
            {item.price}
          </Typography>
          <Typography variant="h6" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.detail}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Fab
            className={classes.fab}
            size="small"
            color="secondary"
            onClick={() => addToCart(item)}
          >
            <AddShoppingCartIcon />
          </Fab>
        </CardActions>
      </Box>
    </Card>
  )
}

export { ShopItemCard }
