import { CartContextProvider } from 'components/providers/CartContextProvider'
import { SnackbarProvider } from 'components/providers/SnackbarProvider/SnackbarProvider'
import React from 'react'

export const Providers = ({ children }) => (
  <CartContextProvider>
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  </CartContextProvider>
)
