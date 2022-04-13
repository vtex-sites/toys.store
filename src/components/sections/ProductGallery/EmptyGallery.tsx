import React from 'react'
import { LinkButton } from 'src/components/ui/Button'
import EmptyState from 'src/components/ui/EmptyState'
import Icon from 'src/components/ui/Icon'

function EmptyGallery() {
  return (
    <EmptyState>
      <header>
        <Icon name="CircleWavyWarning" width={56} height={56} weight="thin" />

        <p>Não encontramo snada com a combinação do termo pesquisado</p>
      </header>

      <LinkButton
        to="/produtos/brinquedos"
        variant="secondary"
        icon={
          <Icon name="CircleWavyWarning" width={18} height={18} weight="bold" />
        }
        iconPosition="left"
      >
        Nossos brinquedos
      </LinkButton>
      <LinkButton
        to="/produtos/kit-praia"
        variant="secondary"
        icon={<Icon name="RocketLaunch" width={18} height={18} weight="bold" />}
        iconPosition="left"
      >
        Kit praia
      </LinkButton>
    </EmptyState>
  )
}

export default EmptyGallery
