import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavBar } from 'components/views/NavBar/Navbar'
import { ShopRoutes } from 'components/routes/ShopRoutes'
import { useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  navigation: {
    flex: 1,
  },
}))

const ShopScreen = () => {
  const classes = useStyles()
  const { url } = useRouteMatch()

  return (
    <div className={classes.root}>
      <NavBar url={url} />
      <ShopRoutes url={url} />
    </div>
  )
}

export { ShopScreen }
