import React from 'react'
import Icon from 'src/components/ui/Icon'

import Incentives from './Incentives'

function IncentivesFooter() {
  const incentives = [
    {
      icon: <Icon name="ShieldCheck" width={32} height={32} />,
      firstLineText: 'Protegido',
      secondLineText: 'Pela força de zeus',
    },
    {
      icon: <Icon name="Medal" width={32} height={32} />,
      firstLineText: 'Qualidade',
      secondLineText: 'Dos Deuses',
    },
    {
      icon: <Icon name="CircleWavyCheck" width={32} height={32} />,
      firstLineText: '3 anos',
      secondLineText: 'de garantia',
    },
    {
      icon: <Icon name="Storefront" width={32} height={32} />,
      firstLineText: 'Frete',
      secondLineText: 'Mais rápido',
    },
    {
      icon: <Icon name="Truck" width={32} height={32} />,
      firstLineText: 'Frete',
      secondLineText: 'Gratix',
    },
  ]

  return <Incentives incentives={incentives} />
}

export default IncentivesFooter
