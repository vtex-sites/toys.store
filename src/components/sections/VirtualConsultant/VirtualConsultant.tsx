import React, { useState } from 'react'
import type { PropsWithChildren, AnchorHTMLAttributes } from 'react'
import { RadioGroup, RadioOption } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'

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
  const [option0, setOption0] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')

  function verifyRadio(radioName: string, radioValue: string) {
    if (radioName === 'radio-group0') {
      setOption0(radioValue)
    } else if (radioName === 'radio-group1') {
      setOption1(radioValue)
    } else {
      setOption2(radioValue)
    }
  }

  function verifySelected(radioName: string) {
    if (radioName === 'radio-group0') {
      return option0
    }

    if (radioName === 'radio-group1') {
      return option1
    }

    return option2
  }

  function handleUrl(urlOption0: string) {
    let urlFinal = ''
    const urlMapping = urlOption0.split('|')

    const fixPath = '/produtos/brinquedos'
    const fixMap =
      'category-1=produtos&category-2=brinquedos&facets=category-1,category-2'

    let urlPathTemporary: string | undefined = ''
    let urlMapTemporary: string | undefined = ''

    urlMapping.forEach((url) => {
      if (!url) {
        return
      }

      const ways = url.split('/')

      urlPathTemporary = ways[0]
        ? `${urlPathTemporary}${ways[1]}=${ways[0]}&`
        : ''
      urlMapTemporary = ways[1] ? `${urlMapTemporary},${ways[1]}` : ''
    })

    if (urlPathTemporary && urlMapTemporary) {
      urlFinal = `${fixPath}?${urlPathTemporary}${fixMap}${urlMapTemporary}`
    } else {
      urlFinal = `${fixPath}?${fixMap}`
    }

    return urlFinal
  }

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
                  selectedValue={verifySelected(`radio-group${index}`)}
                  onChange={(v) =>
                    verifyRadio(`radio-group${index}`, v.currentTarget.value)
                  }
                >
                  {filterValue?.optionsValue?.map((filterOption, index2) => (
                    <RadioOption
                      value={`${filterOption.values}/${filterOption.maps}`}
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
            to={handleUrl(`${option0}|${option1}|${option2}`)}
            onClick={onClickLink}
          >
            pesquisar <Icon name="ArrowRight" width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VirtualConsultant
