import React from 'react'
import ReactDOM from 'react-dom'
import 'i18n'
import App from 'App'
import 'fontsource-roboto'
import { Providers } from 'components/providers/Providers'
import Axios from 'axios'
import { DEV_API_URL } from 'constants/apiUrls'

// TO DO add api url as an env variable
Axios.defaults.baseURL = DEV_API_URL

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
