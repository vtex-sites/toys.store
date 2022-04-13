import React from 'react'
import type { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

function NewProducts({ children, className = '' }: PropsWithChildren<Props>) {
  return (
    <section className={`section frn-newProducts ${className}`}>
      <div className="frn-newProducts__grid-content / grid-content">
        <div className="frn-newProducts__children">{children}</div>
      </div>
    </section>
  )
}

export default NewProducts
