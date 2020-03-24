import React from 'react'
import SingleOrder from '../singleOrder'
import _orderBy from 'lodash/orderBy'
import _isEmpty from 'lodash/isEmpty'

import './styles.scss'
import { OrderDataType } from '../../types'

type OrderSectionType = {
  orderListData: OrderDataType[]
}

const OrderSection = ({ orderListData }: OrderSectionType) => {
  return (
    <div className="order-section">
      <h2>Orders</h2>
      {!_isEmpty(orderListData) ? (
        <table>
          <tbody>
            <tr>
              <th>200 grams</th>
              <th>400 grams</th>
              <th>1000 grams</th>
              <th>BoxAmmount</th>
              <th>Ordered at</th>
            </tr>
            {orderListData &&
              orderListData.map((order, id) => (
                <SingleOrder
                  key={id}
                  orderQuantity={_orderBy(
                    order.orderDetail,
                    ['orderSize'],
                    ['asc']
                  )}
                  boxAmount={order.boxAmount}
                  orderDate={order.orderedAt}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>There are no order yet</p>
      )}
    </div>
  )
}

export default OrderSection
