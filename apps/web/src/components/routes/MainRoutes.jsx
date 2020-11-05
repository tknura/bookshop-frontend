import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ShopScreen } from 'screens/ShopScreen/ShopScreen'
import { SingInUpScreen } from 'screens/SignInUpScreen/SingInUpScreen'

const MainRoutes = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path="/home">
      <ShopScreen />
    </Route>
    <Route path="/sign">
      <SingInUpScreen />
    </Route>
  </Switch>
)

export { MainRoutes }
