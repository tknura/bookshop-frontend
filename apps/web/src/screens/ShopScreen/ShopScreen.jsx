import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavBar } from 'components/views/NavBar/Navbar'
import { ShopRoutes } from 'components/routes/ShopRoutes'
import { useRouteMatch } from 'react-router-dom'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const ShopScreen = () => {
  const classes = useStyles()
  const { url } = useRouteMatch()

  return (
    <div className={classes.root}>
      <NavBar url={url} />
      <Container className={classes.contentContainer}>
        <ShopRoutes url={url} />
      </Container>
    </div>
  )
}

export { ShopScreen }
