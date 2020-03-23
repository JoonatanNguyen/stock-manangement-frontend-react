import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import './App.scss'

import Routes from './Routes'

export default function App() {
  const history = useHistory()
  useEffect(() => {
    history.push('/stock/coffee')
  }, [])

  return (
    <>
      <Routes />
    </>
  )
}
