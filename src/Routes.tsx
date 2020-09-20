import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DashboardLayout from './pages/dashboardLayout/DashboardLayout'

const Routes = () => (
  <Switch>
    <Route path="/stock" component={DashboardLayout} />
  </Switch>
)

export default Routes
