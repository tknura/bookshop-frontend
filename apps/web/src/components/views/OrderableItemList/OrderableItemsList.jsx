import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { ShopItemCard } from 'components/views/ShopItemCard/ShopItemCard'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
}))

const OrderableItemsList = ({ items }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container spacing={2}>
      {items?.map((val) => (
        <Grid key={val.id} item>
          <ShopItemCard item={val} />
        </Grid>
      ))}
    </Grid>
  )
}

export { OrderableItemsList }
