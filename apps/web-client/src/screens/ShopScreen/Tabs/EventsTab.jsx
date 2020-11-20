import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { OrderableItemsList } from 'components/views/OrderableItemList/OrderableItemsList'
import { mockedEventsList } from 'screens/ShopScreen/Tabs/EventsList'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  circularProgress: {
    marginLeft: '50%',
  },
}))

/**
 * Events tab is fully mock there should be different
 * components for displaying event list to the user
 */
const EventsTab = () => {
  const classes = useStyles()
  const [booksList] = useState([...mockedEventsList])
  return (
    <Box className={classes.root}>
      <OrderableItemsList items={booksList} />
    </Box>
  )
}

export { EventsTab }
