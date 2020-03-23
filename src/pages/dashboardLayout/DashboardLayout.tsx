import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'

import { CoffeeTabDataType, AppState } from '../../types'
import SideNavigation from '../../components/sideNavigation'
import SummarySection from '../../components/summarySection'
import OrderSection from '../../components/orderSection'
import { getCoffee, getBox } from '../../redux/actions'

const tabs: CoffeeTabDataType[] = [
  {
    tabId: 200,
    tabName: 'tab1',
    tabTitle: '200 grams',
    cards: [
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Available',
        cardBackgroundColor: 'Orange',
        cardNumber: 30,
      },
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Reserved',
        cardBackgroundColor: '#d456d6',
        cardNumber: 30,
      },
    ],
  },
  {
    tabId: 400,
    tabName: 'tab2',
    tabTitle: '400 grams',
    cards: [
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Available',
        cardBackgroundColor: 'Orange',
        cardNumber: 30,
      },
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Reserved',
        cardBackgroundColor: '#d456d6',
        cardNumber: 30,
      },
    ],
  },
  {
    tabId: 1000,
    tabName: 'tab3',
    tabTitle: '1000 grams',
    cards: [
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Available',
        cardBackgroundColor: 'Orange',
        cardNumber: 30,
      },
      {
        cardIcon: 'https://i.postimg.cc/Dy2bKKcj/coffee-bag-icon.png',
        cardTitle: 'Reserved',
        cardBackgroundColor: '#d456d6',
        cardNumber: 30,
      },
    ],
  },
]

const boxCardData = [
  {
    cardIcon: 'https://i.postimg.cc/265ThMZj/package-icon.png',
    cardTitle: 'Available',
    cardBackgroundColor: 'Orange',
    cardNumber: 40,
  },
  {
    cardIcon: 'https://i.postimg.cc/265ThMZj/package-icon.png',
    cardTitle: 'Reserved',
    cardBackgroundColor: '#d456d6',
    cardNumber: 2,
  },
  {
    cardIcon: 'https://i.postimg.cc/265ThMZj/package-icon.png',
    cardTitle: 'Pending',
    cardBackgroundColor: '#ef2868',
    cardNumber: 0,
  },
]

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCoffee())
    dispatch(getBox())
  }, [dispatch])

  const coffeeData = useSelector(
    (state: AppState) => state.coffee.coffeeInStock
  )
  const boxData = useSelector((state: AppState) => state.box.boxInStock)

  return (
    <div className="layout-container">
      <SideNavigation />
      <div className="layout-content">
        <h1>Dashboard</h1>
        <Switch>
          <Route
            exact
            path="/stock/coffee"
            component={() => (
              <div>
                <SummarySection coffeeTabData={tabs} coffeeData={coffeeData} />
                <OrderSection />
              </div>
            )}
          />
          <Route
            exact
            path="/stock/box"
            component={() => (
              <div>
                <SummarySection boxCardData={boxCardData} boxData={boxData} />
                <OrderSection />
              </div>
            )}
          />
        </Switch>
      </div>
    </div>
  )
}
