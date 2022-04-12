import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import type { RefObject } from 'react'
import React, { useEffect, useState } from 'react'
import { DiscountBadge } from 'src/components/ui/Badge'
import Breadcrumb from 'src/components/ui/Breadcrumb'
import BuyButton from 'src/components/ui/BuyButton'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import QuantitySelector from 'src/components/ui/QuantitySelector'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProduct } from 'src/sdk/product/useProduct'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'
import ProductImage from 'src/components/sections/ProductImage'
import { Carousel } from '@faststore/ui'

import Section from '../Section'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()
  const [addQuantity, setAddQuantity] = useState(1)
  const myRef = React.createRef() as RefObject<HTMLInputElement>

  // Stale while revalidate the product for fetching the new price etc
  const { data, isValidating } = useProduct(staleProduct.id, {
    product: staleProduct,
  })

  if (!data) {
    throw new Error('NotFound')
  }

  const {
    product: {
      id,
      sku,
      gtin,
      description,
      name: variantName,
      brand,
      isVariantOf,
      isVariantOf: { name, productGroupID: productId },
      image: productImages,
      offers: {
        offers: [{ availability, price, listPrice, seller }],
        lowPrice,
      },
      breadcrumbList: breadcrumbs,
    },
  } = data

  const buyDisabled = availability !== 'https://schema.org/InStock'

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity: addQuantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
    },
  })

  useEffect(() => {
    sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
      name: 'view_item',
      params: {
        currency: currency.code as CurrencyCode,
        value: price,
        items: [
          {
            item_id: isVariantOf.productGroupID,
            item_name: isVariantOf.name,
            item_brand: brand.name,
            item_variant: sku,
            price,
            discount: listPrice - price,
            currency: currency.code as CurrencyCode,
            item_variant_name: variantName,
            product_reference_id: gtin,
          },
        ],
      },
    })
  }, [
    isVariantOf.productGroupID,
    isVariantOf.name,
    brand.name,
    sku,
    price,
    listPrice,
    currency.code,
    variantName,
    gtin,
  ])

  return (
    <Section className="product-details / grid-content grid-section">
      <Breadcrumb breadcrumbList={breadcrumbs.itemListElement} />

      <section className="product-details__body">
        <section className="product-details__floatbuy">
          <header className="product-details__title">
            <ProductTitle
              title={<h1 className="title-product">{name}</h1>}
              label={
                <DiscountBadge listPrice={listPrice} spotPrice={lowPrice} />
              }
              refNumber={productId}
              brandName={brand.name}
              description={description}
            />

            <Button
              buttonClass="button-add-pdp button button-add-pdp--desktop"
              variant="secondary"
              icon={<Icon name="buttonSeemore" width={12} height={8} />}
              iconPosition="right"
              onClick={() => handleScrollToElement(myRef)}
            >
              saiba mais
            </Button>
          </header>

          <section className="product-details__image product-details__image--mobile">
            <Carousel
              infiniteMode
              controls="paginationBullets"
              transition={{ duration: 400, property: 'transform' }}
            >
              {productImages.map((singleImage, index) => {
                return (
                  <ProductImage
                    image={singleImage.url}
                    alt={singleImage.alternateName}
                    key={index}
                  />
                )
              })}
            </Carousel>
          </section>

          <section className="product-details__settings">
            <section className="product-details__values">
              <div className="product-details__prices">
                <Price
                  value={listPrice}
                  formatter={useFormattedPrice}
                  testId="list-price"
                  data-value={listPrice}
                  variant="listing"
                  classes="text-body-small"
                  SRText="De:"
                />
                <Price
                  value={lowPrice}
                  formatter={useFormattedPrice}
                  testId="price"
                  data-value={lowPrice}
                  variant="spot"
                  classes="title-display"
                  SRText="Por:"
                />
              </div>
              {/* <div className="prices">
                <p className="price__old text-body-small">{formattedListPrice}</p>
                <p className="price__new">{isValidating ? '' : formattedPrice}</p>
              </div> */}
            </section>
            <section className="product-details__actions">
              <QuantitySelector min={1} max={10} onChange={setAddQuantity} />

              {/* NOTE: A loading skeleton had to be used to avoid a Lighthouse's
                  non-composited animation violation due to the button transitioning its
                  background color when changing from its initial disabled to active state.
                  See full explanation on commit https://git.io/JyXV5. */}
              {isValidating ? (
                <AddToCartLoadingSkeleton />
              ) : (
                <BuyButton disabled={buyDisabled} {...buyProps}>
                  add ao carrinho
                </BuyButton>
              )}
            </section>
          </section>
        </section>

        <section className="product-details__image product-details__image--desktop">
          {productImages.map((singleImage, index) => {
            return (
              <ProductImage
                image={singleImage.url}
                alt={singleImage.alternateName}
                key={index}
              />
            )
          })}
        </section>

        <section className="product-details__content" ref={myRef}>
          <article className="product-details__description">
            <h2 className="title-subsection">Description</h2>
            <p className="text-body">{description}</p>
          </article>
        </section>
      </section>
    </Section>
  )
}

function handleScrollToElement(myRef: React.RefObject<HTMLElement>) {
  window.scrollTo(0, myRef.current ? myRef.current.offsetTop : 0)
}

function AddToCartLoadingSkeleton() {
  // Generated via https://skeletonreact.com/.
  return (
    <svg
      role="img"
      width="100%"
      height="48"
      aria-labelledby="loading-aria"
      viewBox="0 0 112 48"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="112" height="48" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productID
    sku
    name
    gtin
    description

    isVariantOf {
      productGroupID
      name
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        seller {
          identifier
        }
      }
    }

    breadcrumbList {
      itemListElement {
        item
        name
        position
      }
    }
  }
`

export default ProductDetails
