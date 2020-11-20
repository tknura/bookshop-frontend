import { ARTICLES_ROUTE, BOOKS_ROUTE, CART_ROUTE, EVENTS_ROUTE } from 'constants/routeNames'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CartScreen } from 'screens/CartScreen/CartScreen'
import { ArticlesTab } from 'screens/ShopScreen/Tabs/ArticlesTab'
import { BooksTab } from 'screens/ShopScreen/Tabs/BooksTab'

const ShopRoutes = ({ url }) => (
  <Switch>
    <Redirect exact path={`${url}`} to={`${url}/books`} />
    <Route exact path={`${url}${BOOKS_ROUTE}`}>
      <BooksTab />
    </Route>
    <Route exact path={`${url}${ARTICLES_ROUTE}`}>
      <ArticlesTab />
    </Route>
    <Route exact path={`${url}${EVENTS_ROUTE}`}>
      {/* {TODO: insert event tab here} */}
    </Route>
    <Route exact path={`${url}${CART_ROUTE}`}>
      <CartScreen />
    </Route>
  </Switch>
)

export { ShopRoutes }
