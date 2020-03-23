import React from 'react'

import './styles.scss'

import '../../assets/coffee-bag-icon.png'

type SummaryCardType = {
  cardIcon: string
  cardTitle: string
  cardNumber: number
  cardBackgroundColor: string
}

const SummaryCard = ({
  cardIcon,
  cardTitle,
  cardNumber,
  cardBackgroundColor,
}: SummaryCardType) => {
  return (
    <div
      className="summary-card"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className="summary-card__icon">
        <div style={{ margin: '15px' }}>
          <img src={cardIcon} alt="card icon" />
        </div>
      </div>
      <div className="summary-card-content">
        <p className="summary-card-content__title">{cardTitle}</p>
        <p className="summary-card-content__number">{cardNumber}</p>
      </div>
    </div>
  )
}

export default SummaryCard
