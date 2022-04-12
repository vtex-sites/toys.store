import {
  Card as UICard,
  CardContent as UICardContent,
  CardImage as UICardImage,
} from '@faststore/ui'
import React from 'react'
import type { HTMLAttributes } from 'react'
import { Image } from 'src/components/ui/Image'
import { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

export interface HeroCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
}

type Variant = 'horizontal' | 'vertical'

type Size = 'small' | 'medium' | 'large'

interface Props {
  bordered?: boolean
  variant?: Variant
  imageSrc?: string
  imageAlt?: string
  aspectRatio?: number
  size?: Size
  title?: string
  link?: string
  linkText?: string
  icon?: boolean
}

function HeroCard({
  bordered = false,
  variant = 'vertical',
  imageSrc,
  imageAlt,
  aspectRatio = 1,
  size = 'small',
  title,
  link,
  linkText,
  icon,
  ...otherProps
}: Props) {
  return (
    <UICard
      className="hero-card"
      data-card-variant={variant}
      data-card-bordered={bordered}
      data-card-size={size}
      {...otherProps}
    >
      {!!imageSrc && (
        <UICardImage>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={360}
            height={360 / aspectRatio}
            sizes="(max-width: 768px) 25vw, 30vw"
            loading="lazy"
          />
        </UICardImage>
      )}
      <div className="hero-card__content">
        <UICardContent>
          <div className="hero-card__heading">
            <h2 className="hero-card__title">{title}</h2>
          </div>
        </UICardContent>
        {!!link && (
          <LinkButton to={link} variant="tertiary">
            {linkText} <Icon name="ArrowRight" width={15} height={15} />
          </LinkButton>
        )}
      </div>
    </UICard>
  )
}

export default HeroCard
