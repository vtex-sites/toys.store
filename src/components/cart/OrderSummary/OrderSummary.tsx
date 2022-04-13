import { List } from '@faststore/ui'
import React from 'react'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { ReactNode } from 'react'

interface OrderSummaryProps {
  subTotal: number
  total: number
  numberOfItems: number
  checkoutButton?: ReactNode
}

function OrderSummary({
  subTotal,
  total,
  numberOfItems,
  checkoutButton,
}: OrderSummaryProps) {
  const discount = subTotal - total
  const formattedDiscount = useFormattedPrice(discount)

  return (
    <List className="order-summary" data-order-summary>
      <li>
        <span>Sub-total ({numberOfItems} produto)</span>
        <span>{useFormattedPrice(subTotal)}</span>
      </li>
      {discount > 0 && (
        <li data-order-summary-discount>
          <span>Desconto</span>
          <span>-{formattedDiscount}</span>
        </li>
      )}
      <li className="title-subsection">
        <span>Total</span>
        <span>{useFormattedPrice(total)}</span>
      </li>
      {checkoutButton}
    </List>
  )
}

export default OrderSummary
