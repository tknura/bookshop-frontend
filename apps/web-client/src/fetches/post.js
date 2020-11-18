import Axios from 'axios'
import { DEV_API_URL } from 'constants/apiUrls'

export const postSignUp = values => Axios.post(`${DEV_API_URL}/auth/signUp`, values)

export const postSignIn = values => Axios.post(`${DEV_API_URL}/auth/signIn`, values)
