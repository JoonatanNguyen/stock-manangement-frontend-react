import React from 'react'

import './styles.scss'

type SideNavigationItemType = {
  itemName: string
  onNavigationItemClick: () => void
}
const SideNavigationItem = ({
  itemName,
  onNavigationItemClick,
}: SideNavigationItemType) => {
  return (
    <div className="navigation-item-container" onClick={onNavigationItemClick}>
      <p>{itemName}</p>
    </div>
  )
}

export default SideNavigationItem
