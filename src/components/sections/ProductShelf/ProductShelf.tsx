import React from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import CarouselShelf from 'src/components/common/CarouselShelf'

import ProductCard from '../../product/ProductCard'
import Section from '../Section'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  withDivisor?: boolean
}

function ProductShelf({
  title,
  withDivisor = false,
  ...variables
}: ProductShelfProps) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`page__section-shelf / grid-section ${
        withDivisor ? 'page__section-divisor' : ''
      }`}
    >
      <h2 className="title-section / grid-content">{title}</h2>
      <div className="page__section-content">
        <ProductShelfSkeleton loading={products === undefined}>
          <CarouselShelf
            itensPerPageSlider={4}
            controls="navigationArrows"
            id="carousel-novidades"
          >
            {products?.edges.map((product, idx) => (
              <li key={`${product.node.id}`}>
                <ProductCard product={product.node} index={idx + 1} />
              </li>
            ))}
          </CarouselShelf>
          {/* <ul data-product-shelf className="grid-content"></ul> */}
        </ProductShelfSkeleton>
      </div>
    </Section>
  )
}

export default ProductShelf
