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

const useStyles = makeStyles(() => ({
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
}))

const ShopItemCard = ({ item: { price, name, detail, image } }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
      />
      <Box className={classes.innerCardBox}>
        <CardContent>
          <Typography variant="h6" color="primary" component="h2">
            {price}
          </Typography>
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {detail}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Fab color="secondary">
            <AddShoppingCartIcon />
          </Fab>
        </CardActions>
      </Box>
    </Card>
  )
}

export { ShopItemCard }
