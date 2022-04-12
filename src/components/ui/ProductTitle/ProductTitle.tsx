import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface ProductTitleProp {
  /**
   * A react component to be used as the product title, e.g. an <h1>
   */
  title: ReactNode
  /**
   * A react component to be used as the product label, e.g. a <DiscountBadge>
   */
  label?: ReactNode
  /**
   * A text to be used below the title and the label, such as the product's reference number.
   */
  refNumber?: string
  /**
   * A text to use below the product name, such as the product brand.
   */
  brandName?: string
  /**
   * A text to be used below the product brand, with the short description.
   */
  description?: string
}

function ProductTitle({
  title,
  label,
  refNumber,
  brandName,
  description,
}: ProductTitleProp) {
  return (
    <div className="product-title">
      <div className="product-title__header">
        {!!label && label}
        {title}
      </div>

      {refNumber && (
        <div className="product-title__addendum / text-body-small">
          Ref.: {refNumber}
        </div>
      )}

      {brandName && (
        <div className="product-title__brandname / text-body-small">
          Marca: {brandName}
        </div>
      )}

      {description && (
        <div className="product-title__shortdescription / text-body-small">
          {description.substr(0, 300)}...
        </div>
      )}
    </div>
  )
}

export default memo(ProductTitle)
