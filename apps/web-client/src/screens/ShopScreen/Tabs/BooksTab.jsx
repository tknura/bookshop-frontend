import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import Axios from 'axios'
import { OrderableItemsList } from 'components/views/OrderableItemList/OrderableItemsList'
import { BOOK_API_URL } from 'constants/apiUrls'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  circularProgress: {
    marginLeft: '50%',
  },
}))

const BooksTab = () => {
  const classes = useStyles()
  const [booksList, setBooksList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true)
        const books = await Axios.get(BOOK_API_URL)
        const tmpBooks = books.data.map(b => ({
          id: b.ISBN,
          price: b.price.displayValue + b.price.currency,
          name: b.title,
          detail: b.author,
          image: b.image,
        }))
        setBooksList(tmpBooks)
        setIsLoading(false)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <Box className={classes.root}>
      {isLoading && (
        <CircularProgress className={classes.circularProgress} />
      )}
      <OrderableItemsList items={booksList} />
    </Box>
  )
}

export { BooksTab }
