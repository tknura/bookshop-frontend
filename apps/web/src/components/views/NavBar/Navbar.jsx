import React from 'react'
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useCartContext } from 'components/providers/CartContextProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  singInButton: {
    margin: 'auto',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    marginRight: -theme.spacing(10),
  },
  shopCardIcon: {
    color: 'white',
  },
}))

const NavBar = ({ url }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  const { cartItems } = useCartContext()
  const handleCallToRouter = (event, value) => {
    history.push(value)
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {t('common.appName')}
        </Typography>
        <IconButton onClick={() => handleCallToRouter(null, `${url}/cart`)}>
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon className={classes.shopCardIcon} />
          </Badge>
        </IconButton>
        <Button
          className={classes.singInButton}
          color="inherit"
          onClick={() => handleCallToRouter(null, '/sign')}
        >
          {t('navigation.login')}
        </Button>
      </Toolbar>
      <Tabs value={history.location.pathname} onChange={handleCallToRouter} centered>
        <Tab value={`${url}/books`} label={t('navigation.tabNames.books')} />
        <Tab value={`${url}/articles`} label={t('navigation.tabNames.articles')} />
        <Tab value={`${url}/events`} label={t('navigation.tabNames.events')} disabled />
      </Tabs>
    </AppBar>
  )
}

export { NavBar }
