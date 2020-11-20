import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
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
  const tokens = useRef(null)
  const [authState, setAuthState] = useState('loading')

  const getTokens = useCallback(() => {
    if (tokens.current) {
      return tokens.current
    }

    const [accessToken, refreshToken] = [
      localStorage.getItem(ACCESS_TOKEN),
      localStorage.getItem(REFRESH_TOKEN),
    ]

    tokens.current = { accessToken, refreshToken }
    return tokens.current
  }, [])

  const setTokens = useCallback(({ accessToken, refreshToken }) => {
    tokens.current = { accessToken, refreshToken }
    localStorage.setItem(ACCESS_TOKEN, accessToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
    Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    setAuthState('userSignedIn')
  }, [])

  const signOut = useCallback(() => {
    setTokens({ accessToken: null, refreshToken: null })
    setAuthState('userSignedOut')
  }, [setTokens])

  const authContextValue = useMemo(() => ({
    getTokens,
    setTokens,
    signOut,
    authState,
  }), [getTokens, setTokens, signOut, authState])

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
