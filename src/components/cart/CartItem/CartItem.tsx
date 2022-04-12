import { Card, CardActions, CardContent, CardImage } from '@faststore/ui'
import React from 'react'
import Button from 'src/components/ui/Button'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import QuantitySelector from 'src/components/ui/QuantitySelector'
import { useCart } from 'src/sdk/cart/useCart'
import { useRemoveButton } from 'src/sdk/cart/useRemoveButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { CartItem as ICartItem } from 'src/sdk/cart/validate'

interface Props {
  item: ICartItem
}

function CartItem({ item }: Props) {
  const btnProps = useRemoveButton(item)
  const { updateItemQuantity } = useCart()

  return (
    <Card
      className="cart-item"
      data-testid="cart-item"
      data-sku={item.itemOffered.sku}
      data-seller={item.seller.identifier}
    >
      <CardContent>
        <CardImage>
          <Image
            src={item.itemOffered.image[0].url}
            alt={item.itemOffered.image[0].alternateName}
            width={95}
            height={95}
          />
        </CardImage>
        <div data-cart-item-summary>
          <p className="text-body" data-cart-item-title>
            {item.itemOffered.isVariantOf.name}
          </p>
          <span data-cart-item-prices>
            <Price
              value={item.listPrice}
              formatter={useFormattedPrice}
              testId="list-price"
              data-value={item.listPrice}
              variant="listing"
              classes="text-body-small"
              SRText="Original price:"
            />
            <Price
              value={item.price}
              formatter={useFormattedPrice}
              testId="price"
              data-value={item.price}
              variant="spot"
              classes="title-subsection"
              SRText="Price:"
            />
          </span>
        </div>
        <CardActions>
          <Button variant="tertiary" iconPosition="left" {...btnProps}>
            remover
          </Button>
          <QuantitySelector
            min={1}
            initial={item.quantity}
            onChange={(quantity) => updateItemQuantity(item.id, quantity)}
          />
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CartItem
