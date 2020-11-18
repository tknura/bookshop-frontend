import Axios from 'axios'
import { BOOK_API_URL } from 'constants/apiUrls'

export const getBooks = () => Axios.get(BOOK_API_URL)
