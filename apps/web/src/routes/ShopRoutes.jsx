import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { BooksTab } from 'screens/ShopScreen/Tabs/BooksTab/BooksTab'

const ShopRoutes = ({ url }) => (
  <Switch>
    <Redirect exact path={`${url}`} to={`${url}/books`} />
    <Route exact path={`${url}/books`}>
      <BooksTab />
    </Route>
    <Route exact path={`${url}/articles`}>
      {/* {TODO: insert article tab here} */}
    </Route>
    <Route exactath={`${url}/events`}>
      {/* {TODO: insert event tab here} */}
    </Route>
  </Switch>
)

export { ShopRoutes }
