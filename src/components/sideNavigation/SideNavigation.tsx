import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.scss'

import SideNavigationItem from '../sideNavigationItem'

const SideNavigation = () => {
  const history = useHistory()

  const handleCoffeeNavigationClick = () => {
    history.push('/stock/coffee')
  }

  const handleBoxNavigationClick = () => {
    history.push('/stock/box')
  }

  return (
    <div className="side-nav-container">
      <div className="side-nav-item-wrapper">
        <SideNavigationItem
          itemName="Coffee"
          onNavigationItemClick={handleCoffeeNavigationClick}
        />
        <SideNavigationItem
          itemName="Box"
          onNavigationItemClick={handleBoxNavigationClick}
        />
      </div>
    </div>
  )
}

export default SideNavigation
