import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import './App.scss'

import Routes from './Routes'
import SideNavigation from './components/sideNavigation'

export default function App() {
  const history = useHistory()
  useEffect(() => {
    history.push('/stock/coffee')
  }, [history])

  return (
    <div className="App">
      <SideNavigation />
      <Routes />
    </div>
  )
}
