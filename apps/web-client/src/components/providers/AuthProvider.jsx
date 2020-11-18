import React, { createContext, useContext, useRef } from 'react'
import Axios from 'axios'
import invariant from 'tiny-invariant'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants/storeKeys'

const AuthContext = createContext(undefined)

const useAuthorization = () => {
  const contextValue = useContext(AuthContext)

  invariant(contextValue, 'useAuthorization hook should be used within SnackbarContext')

  return contextValue
}
const AuthProvider = ({ children }) => {
  const tokens = useRef({
    accessToken: null,
    refreshToken: null,
  })

  const getTokens = () => {
    tokens.current.accessToken = localStorage.getItem(ACCESS_TOKEN)
    tokens.current.refreshToken = localStorage.getItem(REFRESH_TOKEN)
    return tokens
  }

  const setTokens = ({ accessToken, refreshToken }) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
    Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  }

  const authContextValue = {
    getTokens,
    setTokens,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  useAuthorization,
  AuthProvider,
}
