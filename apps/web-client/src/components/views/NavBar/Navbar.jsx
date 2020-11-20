import React from 'react'
import {
  AppBar,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useCartContext } from 'components/providers/CartContextProvider'
import { ARTICLES_ROUTE, BOOKS_ROUTE, CART_ROUTE, EVENTS_ROUTE, SIGN_IN_UP_ROUTE } from 'constants/routeNames'
import { useAuthorization } from 'components/providers/AuthProvider'
import { useShowSnackbar } from 'hooks/useShowSnackbar'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  singInOutButton: {
    margin: 'auto',
  },
  title: {
    flex: 1,
  },
  shopCardIcon: {
    color: 'white',
  },
  toolbarRightBox: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    color: 'white',
    borderColor: 'white',
  },
  icon: {
    fill: 'white',
  },
}))

const NavBar = ({ url }) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  const { cartItems } = useCartContext()
  const { getTokens, signOut } = useAuthorization()
  const show = useShowSnackbar()

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  const handleCallToRouter = (event, value) => {
    history.push(value)
  }

  const tokens = getTokens()

  const handleSignInOutButton = () => {
    if (tokens.accessToken /* && tokens.refreshToken */) {
      signOut()
      show({ message: '' })
    } else {
      handleCallToRouter(null, `${SIGN_IN_UP_ROUTE}`)
    }
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {t('common.appName')}
        </Typography>
        <Box className={classes.toolbarRightBox}>
          <FormControl color="default" size="small" className={classes.select}>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value="pl">Polski</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
          <IconButton onClick={() => handleCallToRouter(null, `${url}${CART_ROUTE}`)}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon className={classes.shopCardIcon} />
            </Badge>
          </IconButton>
          <Button
            className={classes.singInButton}
            color="inherit"
            onClick={handleSignInOutButton}
          >
            {tokens.accessToken ? t('navigation.signOut') : t('navigation.login')}
          </Button>
        </Box>
      </Toolbar>
      <Tabs value={history.location.pathname} onChange={handleCallToRouter} centered>
        <Tab value={`${url}${BOOKS_ROUTE}`} label={t('navigation.tabNames.books')} />
        <Tab value={`${url}${ARTICLES_ROUTE}`} label={t('navigation.tabNames.articles')} />
        <Tab value={`${url}${EVENTS_ROUTE}`} label={t('navigation.tabNames.events')} disabled />
      </Tabs>
    </AppBar>
  )
}

export { NavBar }
