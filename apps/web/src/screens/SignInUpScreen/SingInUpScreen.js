import React, { useState } from 'react'
import { Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { SignInForm } from './SignInForm/SignInForm'
import { SignUpForm } from './SignUpForm/SignUpForm'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '98vw',
    height: '98vh',
  },
  paper: {
    padding: theme.spacing(3),
    width: '45vh',
  },
  title: {
    textAlign: 'center',
  },
  hr: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
}))

const SingInUpScreen = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isSignUpFormShown, setSignUpFormShown] = useState(false)

  const handleFormChange = () => {
    setSignUpFormShown(prevState => !prevState)
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <Typography variant="h2" color="primary" className={classes.title}>
          {t('common.appName').toUpperCase()}
        </Typography>
        {isSignUpFormShown
          ? (<SignUpForm />)
          : (<SignInForm />)}
        <hr className={classes.hr} />
        <Button
          color="secondary"
          className={classes.button}
          onClick={handleFormChange}
        >
          {isSignUpFormShown
            ? t('screen.signInUp.buttons.haveAccount')
            : t('screen.signInUp.buttons.noAccount')}
        </Button>
      </Paper>
    </div>
  )
}

export { SingInUpScreen }
