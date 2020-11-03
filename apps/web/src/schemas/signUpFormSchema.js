import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('common.errors.email.format')
    .required('common.errors.email.required'),
  password: yup
    .string()
    .required('common.errors.password.required')
    .min(8),
})
