import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from 'components/routes/MainRoutes'
import { CartContextProvider } from 'components/providers/CartContextProvider'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
