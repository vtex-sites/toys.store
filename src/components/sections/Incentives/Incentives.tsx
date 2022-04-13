import React from 'react'
import {
  Incentive as UIIncentive,
  List as UIList,
  Carousel,
} from '@faststore/ui'
import type { ReactNode } from 'react'
import { Link, Link as LinkGatsby } from 'gatsby'

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
      <UIList variant="unordered" className="grid-content">
        {carouselProps ? (
          <>
            <Carousel
              controls={carouselProps?.controls}
              transition={{
                duration: carouselProps.transition.duration,
                property: carouselProps.transition.property,
              }}
            >
              {incentives.map((incentive, index) => (
                <li key={String(index)}>
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
                </li>
              ))}
            </Carousel>
            <div className="topLinks hidden-mobile">
              <Link className="topLinks__item" to="/about">
                About
              </Link>
              <Link className="topLinks__item" to="/contact">
                Contact
              </Link>
              <Link className="topLinks__item" to="/policies">
                Policies
              </Link>
            </div>
          </>
        ) : (
          <>
            {incentives.map((incentive, index) => (
              <li key={String(index)}>
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
              </li>
            ))}
          </>
        )}
      </UIList>
    </div>
  )
}

export default Incentives
