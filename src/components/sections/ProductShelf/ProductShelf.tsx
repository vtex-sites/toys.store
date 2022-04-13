import React, { useState, useEffect } from 'react'
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
  const [isDesktop, setDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDesktop(window.innerWidth > 768)
    }
  }, [])

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)

    return () => window.removeEventListener('resize', updateMedia)
  })

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
            itensPerPageSlider={isDesktop ? 4 : 1}
            controls="navigationArrows"
          >
            {products?.edges.map((product, idx) => (
              <div key={`${product.node.id}`}>
                <ProductCard product={product.node} index={idx + 1} />
              </div>
            ))}
          </CarouselShelf>
          {/* <ul data-product-shelf className="grid-content"></ul> */}
        </ProductShelfSkeleton>
      </div>
    </Section>
  )
}

export default ProductShelf
