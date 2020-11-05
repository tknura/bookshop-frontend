import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import invariant from 'tiny-invariant'

const CartContext = createContext()

const useCartContext = () => {
  const contextValue = useContext(CartContext)

  invariant(contextValue, '[CartContext] useCartContext must be called within CartContext.')

  return contextValue
}

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((item) => {
    const tmpCartItems = [...cartItems, item]
    setCartItems(tmpCartItems)
  }, [cartItems])

  const deleteItemFromCart = useCallback((id) => {
    const tmpCartItems = [...cartItems]
    tmpCartItems.filter((item) => item.id !== id)
    setCartItems(tmpCartItems)
  }, [cartItems])

  const contextValue = useMemo(() => ({
    addToCart,
    deleteItemFromCart,
    cartItems,
  }), [addToCart, deleteItemFromCart, cartItems])

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartContextProvider,
  useCartContext,
}
