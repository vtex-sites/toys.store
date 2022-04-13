import React from 'react'
import type { PropsWithChildren } from 'react'
import { LinkButton } from 'src/components/ui/Button'

interface Props {
  className?: string
  skills: string[]
}

function Skills({
  children,
  className = '',
  skills,
}: PropsWithChildren<Props>) {
  return (
    <section className={`section frn-skills ${className}`}>
      <div className="frn-skills__grid-content / grid-content">
        <div className="frn-skills__grid-skills frn-skills__grid-skills__mobile-none">
          {skills?.map((skill, index) => (
            <LinkButton
              className="frn-skills__skill"
              to={`/s/?q=${skill}`}
              variant="tertiary"
              key={String(index)}
              inverse
            >
              {skill}
            </LinkButton>
          ))}
        </div>
        <div className="frn-skills__children">{children}</div>
        <div className="frn-skills__grid-skills">
          {skills?.map((skill2, index2) => (
            <LinkButton
              className="frn-skills__skill"
              to={`/s/?q=${skill2}`}
              variant="tertiary"
              key={String(index2)}
              inverse
            >
              {skill2}
            </LinkButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
