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
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

const CartScreen = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { cartItems } = useCartContext()

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {t('screen.cart.title')}
      </Typography>
      {cartItems.length !== 0
        ? (
          <>
            <CartItemList />
            <Box className={classes.buttonContainer}>
              <Button className={classes.button} color="primary" variant="contained">
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
