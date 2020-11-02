import React from 'react'
import { Link, Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { signInSchema } from '../../../schemas/signInFormSchema'

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
  },
}))

const SignInForm = () => {
  const classes = useStyles()
  const [t] = useTranslation()
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // TO DO add api fetching
    onSubmit: () => null,
    validationSchema: signInSchema,
  })

  return (
    <form autoComplete="off" className={classes.root}>
      <TextField
        id="email"
        value={values.email}
        error={touched.email && errors.email}
        helperText={touched.password && t(errors.email)}
        onChange={handleChange}
        required
        label={t('common.email')}
        variant="outlined"
        className={classes.textField}
      />
      <TextField
        id="password"
        values={values.password}
        error={touched.password && errors.password}
        helperText={touched.password && t(errors.password)}
        onChange={handleChange}
        required
        type="password"
        label={t('common.password')}
        variant="outlined"
        className={classes.textField}
      />
      <Container className={classes.buttonContainer}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          component="button"
          href="#"
        >
          {t('screen.signIn.buttons.resetPassword')}
        </Link>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          {t('screen.signIn.buttons.signIn')}
        </Button>
      </Container>
    </form>
  )
}

export { SignInForm }
