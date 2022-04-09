import React, { useState } from 'react'
import type { PropsWithChildren, AnchorHTMLAttributes } from 'react'
import { RadioGroup, RadioOption } from '@faststore/ui'

import Link from '../../ui/Link'

interface FilterValue {
  title?: string
  values?: string
  maps?: string
}

interface FilterValues {
  title?: string
  optionsValue?: FilterValue[]
}

interface Props {
  className?: string
  filterValues?: FilterValues[]
}

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

function VirtualConsultant(
  { children, className = '', filterValues }: PropsWithChildren<Props>,
  { onClickLink }: NavLinksProps
) {
  const [option, setOption] = useState('')

  return (
    <section className={`section frn-consultant ${className}`}>
      <div className="frn-consultant__grid-content / grid-content">
        <div className="frn-consultant__children">{children}</div>

        <div className="frn-consultant__content">
          {filterValues?.map((filterValue, index) => (
            <div
              className={`frn-consultant__box color${index + 1}`}
              key={String(index)}
            >
              <div className="frn-consultant__header">
                <div className="frn-consultant__header-number number">
                  {index + 1}
                </div>
                <div className="frn-consultant__header-title">
                  {filterValue.title}
                </div>
              </div>

              <div className="frn-consultant__wrapper">
                <RadioGroup
                  name={`radio-group${index}`}
                  selectedValue={option}
                  onChange={(v) => setOption(v.currentTarget.value)}
                >
                  {filterValue?.optionsValue?.map((filterOption, index2) => (
                    <RadioOption
                      value={`${filterOption.values}/?map=c,${filterOption.maps}`}
                      label={`${filterOption.title}`}
                      key={String(index2)}
                    >
                      <span className="check" />
                      <span>{filterOption.title}</span>
                    </RadioOption>
                  ))}
                </RadioGroup>
              </div>
            </div>
          ))}
        </div>

        <div className="frn-consultant__wrapper frn-consultant__actions">
          <div className="border" />

          <Link
            variant="display"
            to={`/brinquedos/${option}`}
            onClick={onClickLink}
          >
            pesquisar ►
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VirtualConsultant
