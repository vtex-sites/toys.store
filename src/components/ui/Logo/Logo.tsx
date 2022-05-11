import React from 'react'
import { Icon as UIIcon } from '@faststore/ui'

function Logo() {
  return (
    <UIIcon
      component={
        <img
          src="/logo-header.png"
          alt="VTEX logo"
          width="114"
          height="51"
          loading="lazy"
        />
      }
    />
  )
}

export default Logo
