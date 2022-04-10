import React from 'react'
import { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

interface Props {
  className?: string
}

function FavoriteProducts({ className = '' }: Props) {
  return (
    <section className={`section frn-favoriteProducts ${className}`}>
      <div className="frn-favoriteProducts__grid-content / grid-content">
        <div className="frn-favoriteProducts__children">
          <div className="frn-favoriteProducts__children-infos">
            <h3>Os favoritos do momento</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
              ipsum dolor sit amet, consectetur adipiscing elit avec.
            </p>
          </div>
          <LinkButton to="" variant="secondary">
            ver todos <Icon name="ArrowRight" width={20} height={20} />
          </LinkButton>
        </div>
        <div className="frn-favoriteProducts__productShelf" />
      </div>
    </section>
  )
}

export default FavoriteProducts
