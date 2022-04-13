import React from 'react'
import UIHero, { HeroCard, HeroContent, HeroLink } from 'src/components/ui/Hero'
import Button, { LinkButton } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'

import Section from '../Section'

type Variant = 'default' | 'small'

interface HeroProps {
  title: string
  subtitle: string
  variant?: Variant
  mainLinkText?: string
  mainLink?: string
  secondaryLinkText?: string
  icon?: JSX.Element
  imageSrc: string
  imageAlt: string
}

const Hero = ({
  title,
  subtitle,
  variant = 'default',
  mainLinkText,
  mainLink,
  secondaryLinkText,
  icon,
  imageAlt,
  imageSrc,
}: HeroProps) => {
  return (
    <Section>
      <UIHero data-hero-variant={variant}>
        <HeroContent aria-labelledby="hero-heading">
          <div className="hero-content-wrapper / grid-content">
            <div className="hero-content-info">
              <h1
                id="hero-heading"
                className={
                  variant === 'default' ? 'title-hero' : 'title-hero-small'
                }
              >
                {title}
              </h1>

              <p className="text-body-big">{subtitle}</p>
              <div className="hero-content-info__buttons">
                {!!mainLink && (
                  <HeroLink>
                    <LinkButton to={mainLink} variant="secondary">
                      {mainLinkText}
                      <Icon name="ArrowRight" width={20} height={20} />
                    </LinkButton>
                  </HeroLink>
                )}
                <Button
                  variant="primary"
                  onClick={() => {
                    const sectionRef = document.querySelector('.frn-consultant')

                    if (sectionRef) {
                      sectionRef.scrollIntoView()
                    }
                  }}
                >
                  {secondaryLinkText}
                </Button>
              </div>
            </div>
            <div className="hero-content-mosaic">
              <div className="hero-content-mosaic__main-card hero-content-mosaic__card">
                <HeroCard
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                  size="large"
                  title="Brinquedos de até R$100"
                  link="/produtos/brinquedos"
                  linkText="ver todos"
                  icon
                />
              </div>
              <div className="hero-content-mosaic__secondary-cards">
                <div className=" hero-content-mosaic__card">
                  <HeroCard
                    size="medium"
                    title="Para jogar com a galera"
                    link="/produtos/brinquedos"
                    linkText="ver todos"
                    icon
                  />
                </div>
                <div className=" hero-content-mosaic__card">
                  <HeroCard
                    size="small"
                    title="Jogos individuais"
                    link="/produtos/brinquedos"
                    linkText="ver todos"
                    icon
                  />
                </div>
                <div className=" hero-content-mosaic__card">
                  <HeroCard
                    size="small"
                    title="Promoções incríveis"
                    link="/produtos/brinquedos"
                    linkText="ver todos"
                    icon
                  />
                </div>
              </div>
            </div>
            {!!icon && <div className="hero-content-icon">{icon}</div>}
          </div>
        </HeroContent>
      </UIHero>
    </Section>
  )
}

export default Hero
