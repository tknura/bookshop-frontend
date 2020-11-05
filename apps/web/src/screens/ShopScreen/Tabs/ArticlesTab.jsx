import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'
import Axios from 'axios'
import { OrderableItemsList } from 'components/OrderableItemList/OrderableItemsList'
import { BOOK_API_URL } from 'constants/apiUrls'
import { shuffle } from 'utils/shuffle'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  circularProgress: {
    marginLeft: '50%',
  },
}))

const ArticlesTab = () => {
  const classes = useStyles()
  const [booksList, setBooksList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
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
        shuffle(tmpBooks)
        setBooksList(tmpBooks)
        setIsLoading(false)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error)
      }
    }

    fetchArticles()
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

export { ArticlesTab }
