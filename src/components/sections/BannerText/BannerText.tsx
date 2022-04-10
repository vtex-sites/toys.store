import { Banner, BannerContent, BannerLink } from '@faststore/ui'
import React from 'react'
import { LinkButton } from 'src/components/ui/Button'
import type { InputHTMLAttributes } from 'react'

import Section from '../Section'

export interface BannerTextProps extends InputHTMLAttributes<HTMLDivElement> {
  title: string
  caption: string
  actionPath: string
  actionLabel: string
}

function BannerText({
  title,
  caption,
  actionPath,
  actionLabel,
}: BannerTextProps) {
  return (
    <Section className="grid-section">
      <Banner>
        <BannerContent className="grid-content">
          <div className="title-display-big">
            <h2>{title}</h2>
            <p>{caption}</p>
          </div>
          <BannerLink>
            <LinkButton to={actionPath} inverse>
              {actionLabel}
            </LinkButton>
          </BannerLink>
        </BannerContent>
      </Banner>
    </Section>
  )
}

export default BannerText
