import React from 'react'
import Icon from 'src/components/ui/Icon'

import Incentives from './Incentives'

interface FrnCarousel {
  controls?: 'complete' | 'navigationArrows' | 'paginationBullets'
  transition: {
    duration: number
    property: string
  }
}

const incentives = [
  {
    icon: <Icon name="Truck" width={32} height={32} />,
    title: 'FRN Cubo',
    firstLineText: 'Com Frete Grátis',
  },
  {
    icon: <Icon name="Calendar" width={32} height={32} />,
    title: 'Troca Garantida',
    firstLineText: '30 dias',
  },
  {
    icon: <Icon name="Gift" width={32} height={32} />,
    title: 'Gift cards',
    firstLineText: '$20 / $30 / $50',
  },
  {
    icon: <Icon name="Storefront" width={32} height={32} />,
    title: 'Lojas físicas',
    firstLineText: '+40 lojas no Brasil',
  },
  {
    icon: <Icon name="ShieldCheck" width={32} height={32} />,
    title: 'Compre online',
    firstLineText: 'Poupe a terra',
  },
]

const carousel: FrnCarousel = {
  controls: 'navigationArrows',
  transition: {
    duration: 400,
    property: 'transform',
  },
}

function IncentivesHeader() {
  return (
    <Incentives
      incentives={incentives}
      carouselProps={carousel}
      classes="incentives--colored incentives--header"
    />
  )
}

export default IncentivesHeader
