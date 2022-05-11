import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import VirtualConsultant from 'src/components/sections/VirtualConsultant'
import Hero from 'src/components/sections/Hero'
import Skills from 'src/components/sections/Skills'
import Newsletter from 'src/components/sections/Newsletter'
import BannerText from 'src/components/sections/BannerText'
import FavoriteProducts from 'src/components/sections/FavoriteProducts'
import ProductShelf from 'src/components/sections/ProductShelf'
import { ITEMS_PER_SECTION } from 'src/constants'
import NewProducts from 'src/components/sections/NewProducts'

export type Props = PageProps<HomePageQueryQuery>

/**
 * Do not use this approach in production:
 *
 * Sometimes people delete content from the CMS on our test account, breaking our CI.
 * Since publishing new content depends on the CI, we get enter a deadlock. This prevents this deadlock
 */

const virtualConsultantJson = [
  {
    title: 'Idade',
    optionsValue: [
      {
        title: '0-2 anos',
        values: '0-2-anos',
        maps: 'idade',
      },
      {
        title: '3-6 anos',
        values: '3-6-anos',
        maps: 'idade',
      },
      {
        title: '7-10 anos',
        values: '7-10-anos',
        maps: 'idade',
      },
      {
        title: '+11 anos',
        values: '-11-anos',
        maps: 'idade',
      },
    ],
  },
  {
    title: 'Gênero',
    optionsValue: [
      {
        title: 'Menino',
        values: 'menino',
        maps: 'genero',
      },
      {
        title: 'Menina',
        values: 'menina',
        maps: 'genero',
      },
      {
        title: 'Meninx',
        values: 'meninx',
        maps: 'genero',
      },
    ],
  },
  {
    title: 'Faixa de preço',
    optionsValue: [
      {
        title: 'Até R$99,99',
        values: 'ate-9999',
        maps: 'faixa-de-preco',
      },
      {
        title: 'De R$100,00 até R$299,99',
        values: 'de-r-10000-ate-r-29999',
        maps: 'faixa-de-preco',
      },
      {
        title: 'De R$300,00 até R$999,99',
        values: 'de-r-30000-ate-r-99999',
        maps: 'faixa-de-preco',
      },
      {
        title: 'Acima de R$1.000,00',
        values: 'acima-de-r-1-00000',
        maps: 'faixa-de-preco',
      },
    ],
  },
]

const skillsArray = [
  'brinquedos',
  'colecionáveis',
  'bonencas',
  'jogos',
  'peças avulsas',
  'kit praia',
]

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <Hero
        title="Já pensou em um brinquedo especial hoje?"
        subtitle="Aqui você encontra os melhores presentes para agregar conhecimento, entretenimento e humor para o seu dia a dia ou naquela ocasião especial"
        mainLink="/produtos/brinquedos"
        mainLinkText="Conheça"
        secondaryLinkText="Não sabe o que precisa?"
        imageAlt="oi"
        imageSrc="https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg"
      />
      <VirtualConsultant filterValues={virtualConsultantJson}>
        <h3>Nós criamos um consultor virtual</h3>
        <p>
          Você conseguirá com poucos cliques, ter uma seleção incrível para
          acertar no brinquedo ideal
        </p>
      </VirtualConsultant>
      <NewProducts>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          sort="score_desc"
          title="Novidades"
        />
      </NewProducts>
      {/* <Carousel
        controls="complete"
        transition={{
          duration: 400,
          property: 'transform',
        }}
      >
    </Carousel> */}

      <BannerText
        title="Venha ver nossas novidades"
        caption="Produtos de pré-venda feitos para quem quer e entende o que precisa."
        actionPath="/produtos/brinquedos"
        actionLabel="Venha ver!"
      />
      <Skills skills={skillsArray}>
        <h3>
          Brincar também é um jeito de
          <span className="lastWord"> aprender</span>
        </h3>
        <p>
          Escolha brinquedos baseados nas habilidades que eles ajudam sua
          criança a desenvolver!
        </p>
      </Skills>
      <FavoriteProducts>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          sort="score_desc"
          className="favorites"
        />
      </FavoriteProducts>
      <Newsletter
        title="Receba nossas novidades por e-mail, através de poucos cliques."
        onSubmit={() => {
          //
        }}
      />
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }

    cmsHome {
      sections {
        data
        name
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
