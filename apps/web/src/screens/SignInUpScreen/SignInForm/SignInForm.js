import { Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    padding: 0,
  }
}))

const SignInForm = () => {
  const classes = useStyles()

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        label="E-mail"
        variant="filled"
        className={classes.textField}
      />
      <TextField
        label="Password"
        variant="filled"
        className={classes.textField}
      />
      <Container className={classes.buttonContainer}>
        <Button
          href="#"
        >
          Reset Password
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Sing in
        </Button>
      </Container>
    </form>
  )
}

export { SignInForm }
