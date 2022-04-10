import React from 'react'

interface Props {
  className?: string
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
}

function HeaderBanner({
  className = '',
  title,
  subtitle,
  imageAlt,
  imageSrc,
}: Props) {
  return (
    <section className={`section frn-headerBanner ${className}`}>
      <div className="frn-headerBanner__grid-content">
        <div className="frn-headerBanner__text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="frn-headerBanner__image">
          <div>{imageSrc}</div>
          <div>{imageAlt}</div>
        </div>
      </div>
    </section>
  )
}

export default HeaderBanner
