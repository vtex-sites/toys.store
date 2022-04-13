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
        values: '0-2 anos',
        maps: 'specificationFilter_10',
      },
      {
        title: '3-6 anos',
        values: '3-6 anos',
        maps: 'specificationFilter_10',
      },
      {
        title: '7-10 anos',
        values: '7-10 anos',
        maps: 'specificationFilter_10',
      },
      {
        title: '+11 anos',
        values: '+11 anos',
        maps: 'specificationFilter_10',
      },
    ],
  },
  {
    title: 'Gênero',
    optionsValue: [
      {
        title: 'Menino',
        values: 'Menino',
        maps: 'specificationFilter_11',
      },
      {
        title: 'Menina',
        values: 'Menina',
        maps: 'specificationFilter_11',
      },
      {
        title: 'Para ambos',
        values: 'Ambos',
        maps: 'specificationFilter_11',
      },
    ],
  },
  {
    title: 'Faixa de preço',
    optionsValue: [
      {
        title: 'Até R$99,99',
        values: '0.1 TO 99.99',
        maps: 'p',
      },
      {
        title: 'De R$100,00 até R$299,99',
        values: '100.00 TO 299.99',
        maps: 'p',
      },
      {
        title: 'De R$300,00 até R$999,99',
        values: '300.00 TO 999.99',
        maps: 'p',
      },
      {
        title: 'Acima de R$1.000,00',
        values: '1000 TO 999999.99',
        maps: 'p',
      },
    ],
  },
]

const skillsArray = [
  'lorem ipsum dolor',
  'sit amet',
  'lorem ipsum',
  'sit amet',
  'lorem ipsum',
  'lorem ipsum dolor',
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
        title="Lorem Ipsum Dolor Sit Amet, Consectetur"
        subtitle="Suspendisse molestie, lectus et finibus lobortis, ante felis facilisis ex, quis dictum arcu arcu nec orci. Praesent rutrum mattis nisi."
        mainLink="/produtos/brinquedos"
        mainLinkText="ver todos"
        secondaryLinkText="encontre o presente ideal"
        imageAlt="oi"
        imageSrc="https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg"
      />
      <VirtualConsultant filterValues={virtualConsultantJson}>
        <h3>Lorem ipsum dolor sit amet, consectetur</h3>
        <p>
          Suspendisse molestie, lectus et finibus lobortis, ante felis facilisis
          ex, quis dictum
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
        title="Get to know our next realease"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit nisi, vehicula in turpis sit amet, posuere aliquam nisi."
        actionPath="/produtos/brinquedos"
        actionLabel="call to action"
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
      <FavoriteProducts />
      <Newsletter
        title="Receive our news and promotions in advance. Enjoy and get 10% off your first purchase."
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
