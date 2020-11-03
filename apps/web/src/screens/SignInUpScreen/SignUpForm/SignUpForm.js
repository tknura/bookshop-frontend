import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { signUpSchema } from '../../../schemas/signUpFormSchema'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}))

const SignUpForm = () => {
  const classes = useStyles()
  const [t] = useTranslation()
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      repeatPassword: '',
    },
    // TO DO add api fetching
    onSubmit: () => null,
    validationSchema: signUpSchema,
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
        id="first-name"
        value={values.firstName}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && t(errors.firstName)}
        onChange={handleChange}
        required
        label={t('common.firstName')}
        variant="outlined"
        className={classes.textField}
      />
      <TextField
        id="last-name"
        value={values.lastName}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && t(errors.lastName)}
        onChange={handleChange}
        required
        label={t('common.lastName')}
        variant="outlined"
        className={classes.textField}
      />
      <TextField
        id="phone-number"
        value={values.phoneNumber}
        error={touched.phoneNumber && errors.phoneNumber}
        helperText={touched.phoneNumber && t(errors.phoneNumber)}
        onChange={handleChange}
        required
        label={t('common.phoneNumber')}
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
      <TextField
        id="repeat-password"
        values={values.repeatPassword}
        error={touched.repeatPassword && errors.repeatPassword}
        helperText={touched.repeatPassword && t(errors.repeatPassword)}
        onChange={handleChange}
        required
        type="password"
        label={t('screen.signUp.repeatPassword')}
        variant="outlined"
        className={classes.textField}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        {t('screen.signUp.buttons.signUp')}
      </Button>
    </form>
  )
}

export { SignUpForm }
