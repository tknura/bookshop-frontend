import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import { CartItemList } from 'components/views/CartItemList/CartItemList'
import { useCartContext } from 'components/providers/CartContextProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    maxWidth: 500,
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
  cartValueContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cartValueLabel: {
    flex: 1,
  },
  hr: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderTop: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.primary,
    border: 0,
  },
}))

const CartScreen = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { cartItems, getCartValue } = useCartContext()

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {t('screen.cart.title')}
      </Typography>
      {cartItems.length !== 0
        ? (
          <>
            <CartItemList />
            <hr className={classes.hr} />
            <Box className={classes.cartValueContainer}>
              <Typography className={classes.cartValueLabel}>
                {t('screen.cart.sum')}
              </Typography>
              <Typography variant="h6" color="secondary">
                {`${getCartValue().value} ${getCartValue().currency}`}
              </Typography>
            </Box>
            <Box className={classes.buttonContainer}>
              <Button color="primary" variant="contained">
                {t('screen.cart.order')}
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h6">
            {t('screen.cart.empty')}
          </Typography>
        )}
    </Paper>
  )
}

export { CartScreen }
