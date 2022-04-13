import React from 'react'
import type { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

function AboutDescription({
  children,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <section className={`section frn-aboutDescription ${className}`}>
      <div className="frn-aboutDescription__grid-content / grid-content">
        <div className="frn-aboutDescription__children">{children}</div>
      </div>
    </section>
  )
}

export default AboutDescription
