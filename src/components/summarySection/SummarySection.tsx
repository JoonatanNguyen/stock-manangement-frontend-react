import React from 'react'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'
import { useLocation } from 'react-router-dom'

import './styles.scss'

import {
  CoffeeTabDataType,
  SummaryCardType,
  CoffeeDataType,
  BoxDataType,
} from '../../types'
import SummaryCard from '../summaryCard'

type SummarySectionType = {
  coffeeTabData?: CoffeeTabDataType[]
  boxCardData?: SummaryCardType[]
  coffeeData?: CoffeeDataType[]
  boxData?: BoxDataType
}

const SummarySection = ({
  coffeeTabData,
  boxCardData,
  coffeeData,
  boxData,
}: SummarySectionType) => {
  const currentRoute = useLocation()

  return (
    <div className="summary-section">
      {currentRoute.pathname === '/stock/coffee' ? (
        <div className="tab-container">
          <Tabs>
            <div className="tab-link-wrapper">
              {coffeeTabData &&
                coffeeTabData.map(tab => {
                  return (
                    <TabLink key={tab.tabId} to={tab.tabName}>
                      {tab.tabTitle}
                    </TabLink>
                  )
                })}
            </div>
            {coffeeTabData &&
              coffeeTabData.map(tab => {
                return (
                  <TabContent key={tab.tabId} for={tab.tabName}>
                    {tab.cards.map(card => {
                      const orderSizeData = coffeeData?.find(
                        orderSize => orderSize.orderSize === tab.tabId
                      )
                      return (
                        orderSizeData && (
                          <SummaryCard
                            key={card.cardTitle}
                            cardIcon={card.cardIcon}
                            cardTitle={card.cardTitle}
                            cardBackgroundColor={card.cardBackgroundColor}
                            cardNumber={
                              card.cardTitle === 'Available'
                                ? orderSizeData.available
                                : orderSizeData.reserved
                            }
                          />
                        )
                      )
                    })}
                  </TabContent>
                )
              })}
          </Tabs>
        </div>
      ) : (
        boxCardData &&
        boxData &&
        boxCardData.map(box => {
          return (
            <SummaryCard
              key={box.cardTitle}
              cardIcon={box.cardIcon}
              cardTitle={box.cardTitle}
              cardBackgroundColor={box.cardBackgroundColor}
              cardNumber={
                box.cardTitle === 'Available'
                  ? boxData.available
                  : box.cardTitle === 'Reserved'
                  ? boxData.reserved
                  : boxData.pending
              }
            />
          )
        })
      )}
    </div>
  )
}

export default SummarySection
