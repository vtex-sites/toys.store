import React, { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'Empresa',
    items: [
      {
        href: '/about',
        name: 'Quem somos',
      },
      {
        href: 'https://blog.frncomunicacao.com.br/',
        name: 'Blog',
      },
      {
        href: '/about',
        name: 'Nossas lojas',
      },
      {
        href: '/about',
        name: 'Trabalhe conosco',
      },
    ],
  },
  {
    title: 'Minha conta',
    items: [
      {
        href: '/about',
        name: 'Meus pedidos',
      },
      {
        href: '/about',
        name: 'Alterações de pedido',
      },
      {
        href: '/about',
        name: 'Recall',
      },
      {
        href: '/about',
        name: 'Gift Cards',
      },
    ],
  },
  {
    title: 'Suporte & Serviços',
    items: [
      {
        href: 'https://frncomunicacao.com.br/contact',
        name: 'Suporte',
      },
      {
        href: 'https://frncomunicacao.com.br/contact',
        name: 'Agende um serviço',
      },
      {
        href: 'https://frncomunicacao.com.br/contact',
        name: 'Contato',
      },
    ],
  },
  {
    title: 'Parcerias',
    items: [
      {
        href: 'https://frncomunicacao.com.br/',
        name: 'Afiliados',
      },
      {
        href: 'https://frncomunicacao.com.br/',
        name: 'FRN no mundo',
      },
      {
        href: 'https://frncomunicacao.com.br/',
        name: 'Market Place',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" to={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links">
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title}>
              <p className="title-sub-subsection">{section.title}</p>
              <LinksList items={section.items} />
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
