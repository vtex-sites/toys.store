import { Button as UIButton } from '@faststore/ui'
import React from 'react'
import Icon from 'src/components/ui/Icon'
import type { ButtonProps } from '@faststore/ui'

type Props = ButtonProps

function BuyButton({ children, ...props }: Props) {
  return (
    <UIButton className="button" data-store-buy-button {...props}>
      {children}
      <Icon name="ShoppingCart" width={18} height={18} weight="bold" />
    </UIButton>
  )
}

export default BuyButton
