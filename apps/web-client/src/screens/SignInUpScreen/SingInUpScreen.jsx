import React, { useState } from 'react'
import { Paper, Button, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { useWindowSize } from 'hooks/useWindowSize'
import { SignInForm } from './SignInForm/SignInForm'
import { SignUpForm } from './SignUpForm/SignUpForm'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  rootBig: {
    alignItems: 'center',
  },
  paper: {
    flex: 1,
    padding: theme.spacing(3),
    maxWidth: 500,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  hr: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderTop: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.primary,
    border: 0,
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
  const windowSize = useWindowSize()

  const handleFormChange = () => {
    setSignUpFormShown(prevState => !prevState)
  }

  return (
    <Box className={windowSize.height > 675 ? [classes.root, classes.rootBig] : classes.root}>
      <Paper elevation={0} className={classes.paper}>
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
    </Box>
  )
}

export { SingInUpScreen }
