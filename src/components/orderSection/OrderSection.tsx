import React from 'react'
import SingleOrder from '../singleOrder'

import './styles.scss'

const OrderSection = () => {
  return (
    <div className="order-section">
      <h3>Orders</h3>
      <table>
        <tbody>
          <tr>
            <th>200 grams</th>
            <th>400 grams</th>
            <th>1000 grams</th>
            <th>Ordered at</th>
          </tr>
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
          <SingleOrder />
        </tbody>
      </table>
    </div>
  )
}

export default OrderSection
