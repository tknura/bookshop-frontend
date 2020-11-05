import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(() => ({
  root: {
  },
}))

const ShopItemCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      Mock data
    </Card>
  )
}

export { ShopItemCard }
