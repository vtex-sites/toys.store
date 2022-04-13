import React from 'react'
import { Incentive as UIIncentive } from '@faststore/ui'
import type { ReactNode } from 'react'
import { Link, Link as LinkGatsby } from 'gatsby'
import CarouselShelf from 'src/components/common/CarouselShelf'

interface Incentive {
  icon: ReactNode
  title?: string
  firstLineText: string
  secondLineText?: string
  url?: string
}

interface FrnCarousel {
  controls?: 'complete' | 'navigationArrows' | 'paginationBullets'
  transition: {
    duration: number
    property: string
  }
}

interface Props {
  incentives: Incentive[]
  carouselProps?: FrnCarousel
  classes?: string
}

function Incentives({ incentives, carouselProps, classes = '' }: Props) {
  return (
    <div className={`incentives ${classes} / grid-content-full`}>
      <div className="grid-content data-store-list">
        {carouselProps ? (
          <>
            <CarouselShelf
              itensPerPageSlider={1}
              controls={carouselProps?.controls}
              id="carousel-incentives"
              aria-label={`carousel-incentives-${classes}`}
              transition={{
                duration: carouselProps.transition.duration,
                property: carouselProps.transition.property,
              }}
            >
              {incentives.map((incentive, index) => (
                <div key={String(index)}>
                  <UIIncentive>
                    {incentive.url ? (
                      <LinkGatsby
                        to={incentive.url}
                        aria-label={incentive.title}
                        title={incentive.title}
                        className="incentives__link"
                      >
                        {incentive.icon}
                        <div data-incentive-content>
                          {incentive.title && <p>{incentive.title}</p>}
                          <span>{incentive.firstLineText}</span>
                          {incentive.secondLineText && (
                            <span>{incentive.secondLineText}</span>
                          )}
                        </div>
                      </LinkGatsby>
                    ) : (
                      <>
                        {incentive.icon}
                        <div data-incentive-content>
                          {incentive.title && <p>{incentive.title}</p>}
                          <span>{incentive.firstLineText}</span>
                          {incentive.secondLineText && (
                            <span>{incentive.secondLineText}</span>
                          )}
                        </div>
                      </>
                    )}
                  </UIIncentive>
                </div>
              ))}
            </CarouselShelf>
            <div className="topLinks hidden-mobile">
              <Link className="topLinks__item" to="/about">
                Quem somos
              </Link>
              <Link className="topLinks__item" to="/about">
                Contato
              </Link>
              <Link className="topLinks__item" to="/about">
                Valores
              </Link>
            </div>
          </>
        ) : (
          <>
            {incentives.map((incentive, index) => (
              <div key={String(index)}>
                <UIIncentive>
                  {incentive.url ? (
                    <LinkGatsby
                      to={incentive.url}
                      aria-label={incentive.title}
                      title={incentive.title}
                      className="incentives__link"
                    >
                      {incentive.icon}
                      <div data-incentive-content>
                        {incentive.title && <p>{incentive.title}</p>}
                        <span>{incentive.firstLineText}</span>
                        {incentive.secondLineText && (
                          <span>{incentive.secondLineText}</span>
                        )}
                      </div>
                    </LinkGatsby>
                  ) : (
                    <>
                      {incentive.icon}
                      <div data-incentive-content>
                        {incentive.title && <p>{incentive.title}</p>}
                        <span>{incentive.firstLineText}</span>
                        {incentive.secondLineText && (
                          <span>{incentive.secondLineText}</span>
                        )}
                      </div>
                    </>
                  )}
                </UIIncentive>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Incentives
