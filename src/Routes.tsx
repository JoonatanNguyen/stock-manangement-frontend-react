import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DashboardLayout from './pages/dashboardLayout/DashboardLayout'

const Routes = () => (
  <Switch>
    <Route exact path="/stock/coffee" component={DashboardLayout} />
    <Route exact path="/stock/box" component={DashboardLayout} />
  </Switch>
)

export default Routes
