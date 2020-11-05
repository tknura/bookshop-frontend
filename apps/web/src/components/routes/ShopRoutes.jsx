import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CartScreen } from 'screens/CartScreen/CartScreen'
import { ArticlesTab } from 'screens/ShopScreen/Tabs/ArticlesTab'
import { BooksTab } from 'screens/ShopScreen/Tabs/BooksTab'

const ShopRoutes = ({ url }) => (
  <Switch>
    <Redirect exact path={`${url}`} to={`${url}/books`} />
    <Route exact path={`${url}/books`}>
      <BooksTab />
    </Route>
    <Route exact path={`${url}/articles`}>
      <ArticlesTab />
    </Route>
    <Route exactath={`${url}/events`}>
      {/* {TODO: insert event tab here} */}
    </Route>
    <Route exactath={`${url}/cart`}>
      <CartScreen />
    </Route>
  </Switch>
)

export { ShopRoutes }
