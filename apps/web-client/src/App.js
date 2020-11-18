import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from 'components/routes/MainRoutes'
import { Snackbar } from '@material-ui/core'
import { useSnackbarAlertContext } from 'components/providers/SnackbarProvider/SnackbarAlertContext'
import { useSnackbarContext } from 'components/providers/SnackbarProvider/SnackbarContext'
import { Alert } from 'components/views/Alert'

const App = () => {
  const snackbarProps = useSnackbarContext()
  const snackbarAlertProps = useSnackbarAlertContext()

  return (
    <BrowserRouter>
      <div>
        <MainRoutes />
        <Snackbar {...snackbarProps}>
          <Alert {...snackbarAlertProps} />
        </Snackbar>
      </div>
    </BrowserRouter>
  )
}

export default App
