import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import HeaderBanner from 'src/components/sections/HeaderBanner'

function Page() {
  return (
    <>
      <GatsbySeo noindex nofollow />

      <HeaderBanner
        title="Lorem ipsum dolor sit amet, consectetur"
        subtitle="Suspendisse molestie, lectus et finibus lobortis, ante felis facilisis ex, quis dictum"
        imageAlt="Alt da imagem"
        imageSrc="Src da imagem"
      />
    </>
  )
}

export default Page
