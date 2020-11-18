import React from 'react'
import ReactDOM from 'react-dom'
import 'i18n'
import App from 'App'
import 'fontsource-roboto'
import { Providers } from 'components/providers/Providers'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
