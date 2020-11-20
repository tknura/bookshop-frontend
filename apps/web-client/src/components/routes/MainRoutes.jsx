import { HOME_ROUTE, SIGN_IN_UP_ROUTE } from 'constants/routeNames'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ShopScreen } from 'screens/ShopScreen/ShopScreen'
import { SingInUpScreen } from 'screens/SignInUpScreen/SingInUpScreen'

const MainRoutes = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path={HOME_ROUTE}>
      <ShopScreen />
    </Route>
    <Route path={SIGN_IN_UP_ROUTE}>
      <SingInUpScreen />
    </Route>
  </Switch>
)

export { MainRoutes }
