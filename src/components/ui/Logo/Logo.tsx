import React from 'react'
import { Icon as UIIcon } from '@faststore/ui'

function Logo() {
  return (
    <UIIcon
      component={
        <img
          // className="footer__logo"
          src="/Logo.png"
          alt="VTEX logo"
          width="150"
          // margin="-31px 0 0px -42px;"
          height="124.7"
          loading="lazy"
        />
      }
    />
  )
}

export default Logo
