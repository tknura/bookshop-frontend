import React from 'react'
import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

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
}))

const Navigation = ({ url }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const handleCallToRouter = (event, value) => {
    history.push(value)
  }
  const handleSignInButtonClick = () => {
    handleCallToRouter(null, '/sign')
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {t('common.appName')}
        </Typography>
        <Button className={classes.singInButton} color="inherit" onClick={handleSignInButtonClick}>
          {t('navigation.login')}
        </Button>
      </Toolbar>
      <Tabs value={history.location.pathname} onChange={handleCallToRouter}>
        <Tab value={`${url}/books`} label={t('navigation.tabNames.books')} />
        <Tab value={`${url}/articles`} label={t('navigation.tabNames.articles')} />
        <Tab value={`${url}/events`} label={t('navigation.tabNames.events')} disabled />
      </Tabs>
    </AppBar>
  )
}

export { Navigation }
