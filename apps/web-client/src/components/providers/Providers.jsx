import React from 'react'
import { AuthProvider } from 'components/providers/AuthProvider'
import { CartContextProvider } from 'components/providers/CartContextProvider'
import { SnackbarProvider } from 'components/providers/SnackbarProvider/SnackbarProvider'

export const Providers = ({ children }) => (
  <AuthProvider>
    <CartContextProvider>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </CartContextProvider>
  </AuthProvider>

)
