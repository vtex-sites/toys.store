import React from 'react'
import type { PropsWithChildren } from 'react'
import { Carousel } from '@faststore/ui'

interface Props {
  className?: string
}

function NewProducts({ children, className = '' }: PropsWithChildren<Props>) {
  return (
    <section className={`section frn-newProducts ${className}`}>
      <div className="frn-newProducts__grid-content / grid-content">
        <div className="frn-newProducts__children">
          <Carousel
            controls="complete"
            transition={{
              duration: 400,
              property: 'transform',
            }}
          >
            {children}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default NewProducts
