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

  const addToCart = useCallback(item => {
    let tmpCartItems = [...cartItems]
    const itemIndex = tmpCartItems.findIndex(i => i.id === item.id)
    if (itemIndex !== -1) {
      tmpCartItems[itemIndex].amount += 1
    } else {
      item = { ...item, amount: 1 }
      tmpCartItems = [...tmpCartItems, item]
    }
    setCartItems(tmpCartItems)
  }, [cartItems])

  const deleteItemFromCart = useCallback(item => {
    const tmpCartItems = [...cartItems]
    const itemIndex = tmpCartItems.findIndex(i => i.id === item.id)
    if (itemIndex !== -1) {
      tmpCartItems.splice(itemIndex, 1)
    }
    setCartItems(tmpCartItems)
  }, [cartItems])

  const getAmountOfItem = useCallback(item => {
    const itemIndex = cartItems.findIndex(i => i.id === item.id)
    if (itemIndex !== -1) {
      return cartItems[itemIndex].amount
    }
    return null
  }, [cartItems])

  const getCartValue = useCallback(() => {
    const tmpCartItems = [...cartItems]
    let currency = ''
    const value = Number(tmpCartItems.reduce((acc, val) => {
      currency = val.price.currency
      return acc + (Math.round(val.amount * val.price.value * 100) / 100)
    }, 0)).toFixed(2)
    return { value, currency }
  }, [cartItems])

  const changeItemAmount = useCallback((item, newAmount) => {
    const tmpCartItems = [...cartItems]
    const itemIndex = tmpCartItems.findIndex(i => i.id === item.id)
    if (itemIndex !== -1) {
      tmpCartItems[itemIndex].amount += newAmount
      setCartItems(tmpCartItems)
    }
  }, [cartItems])

  const contextValue = useMemo(() => ({
    addToCart,
    deleteItemFromCart,
    cartItems,
    getAmountOfItem,
    changeItemAmount,
    getCartValue,
  }), [
    addToCart,
    deleteItemFromCart,
    cartItems,
    getAmountOfItem,
    changeItemAmount,
    getCartValue,
  ])

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
