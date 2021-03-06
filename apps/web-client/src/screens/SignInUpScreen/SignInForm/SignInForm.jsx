import React, { useEffect } from 'react'
import { Link, Container, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { signInSchema } from 'schemas/signInFormSchema'
import { useMutation } from 'react-query'
import { postSignIn } from 'fetches/post'
import { useShowSnackbar } from 'hooks/useShowSnackbar'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useHistory } from 'react-router-dom'
import { useAuthorization } from 'components/providers/AuthProvider'

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
    marginTop: theme.spacing(4),
    padding: 0,
  },
}))

const SignInForm = () => {
  const classes = useStyles()
  const [t] = useTranslation()
  const [signIn, { data, error }] = useMutation(postSignIn)
  const { setTokens } = useAuthorization()
  const history = useHistory()
  const show = useShowSnackbar()

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => { signIn({ ...values, username: values.email }) },
    validationSchema: signInSchema,
  })

  useEffect(() => {
    if (data) {
      resetForm({})
      // TO DO add refresh token
      setTokens({ accessToken: data.data.accessToken, refreshToken: null })
      history.goBack()
    } else if (error) {
      show({ message: t('screen.signIn.errors.generic'), type: SNACKBAR_ERROR })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, history, resetForm, t])

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
