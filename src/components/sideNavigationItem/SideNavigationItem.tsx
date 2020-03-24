import React from 'react'

import './styles.scss'

type SideNavigationItemType = {
  itemName: string
  isActive: boolean
  onNavigationItemClick: (itemName: string) => void
}
const SideNavigationItem = ({
  itemName,
  onNavigationItemClick,
  isActive,
}: SideNavigationItemType) => {
  return (
    <div
      className="navigation-item-container"
      onClick={() => onNavigationItemClick(itemName)}
      style={{
        backgroundColor: isActive ? '#3b3b8c' : '',
      }}
    >
      <p>{itemName}</p>
    </div>
  )
}

export default SideNavigationItem
