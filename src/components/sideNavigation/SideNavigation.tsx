import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.scss'

import SideNavigationItem from '../sideNavigationItem'

const SideNavigation = () => {
  const history = useHistory()
  const [currentNav, setCurrentNav] = useState<string>('Coffee')

  const handleCoffeeNavigationClick = (currentNav: string) => {
    setCurrentNav(currentNav)
    history.push('/stock/coffee')
  }

  const handleBoxNavigationClick = (currentNav: string) => {
    setCurrentNav(currentNav)
    history.push('/stock/box')
  }

  return (
    <div className="side-nav-container">
      <div className="side-nav-item-wrapper">
        <SideNavigationItem
          itemName="Coffee"
          onNavigationItemClick={handleCoffeeNavigationClick}
          isActive={currentNav === 'Coffee'}
        />
        <SideNavigationItem
          itemName="Box"
          onNavigationItemClick={handleBoxNavigationClick}
          isActive={currentNav === 'Box'}
        />
      </div>
    </div>
  )
}

export default SideNavigation
