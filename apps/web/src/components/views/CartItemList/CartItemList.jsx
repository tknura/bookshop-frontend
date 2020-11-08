import React from 'react'
import { useCartContext } from 'components/providers/CartContextProvider'
import { Box } from '@material-ui/core'
import { CartItem } from 'components/views/CartItem/CartItem'

const CartItemList = () => {
  const { cartItems, deleteItemFromCart, changeItemAmount } = useCartContext()

  return (
    <Box>
      {cartItems?.map(i =>
        <CartItem
          key={i.id}
          item={i}
          onDelete={deleteItemFromCart}
          onChangeAmount={changeItemAmount}
        />)}
    </Box>
  )
}

export { CartItemList }
