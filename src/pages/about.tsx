import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import HeaderBanner from 'src/components/sections/HeaderBanner'
import AboutDescription from 'src/components/sections/AboutDescription'
import { Banner, BannerContent, BannerLink } from '@faststore/ui'
import { LinkButton } from 'src/components/ui/Button'
import FavoriteProducts from 'src/components/sections/FavoriteProducts'
import Newsletter from 'src/components/sections/Newsletter'

function Page() {
  return (
    <>
      <GatsbySeo noindex nofollow />

      <HeaderBanner
        title="Lorem ipsum dolor sit amet, consectetur"
        subtitle="Suspendisse molestie, lectus et finibus lobortis, ante felis facilisis ex, quis dictum"
        imageAlt="Banner do Header"
        imageSrc="/HeaderBanner.webp"
      />
      <AboutDescription>
        <h3>Lorem ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
          quis arcu accumsan aliquam. Donec tempus rhoncus felis vel facilisis.
          Quisque eleifend fermentum ex, sit amet interdum dolor dapibus vitae.
          Proin non sem vulputate, porttitor nibh eget, consectetur dolor. Sed
          tincidunt scelerisque quam, eu fringilla risus fermentum in. Proin
          mattis mi nec justo ullamcorper, nec vulputate mi venenatis.
          Suspendisse porta sagittis lacus, a tincidunt ante feugiat id.
          <br />
          <br />
          Duis dictum lorem ac orci imperdiet volutpat a ut augue. Quisque vel
          purus facilisis, sodales ex eu, aliquam lacus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed ut nisl quis arcu accumsan
          aliquam. Donec tempus rhoncus felis vel facilisis. Quisque eleifend
          fermentum ex, sit amet interdum dolor dapibus vitae. Proin non sem
          vulputate lacus.
          <br />
          <Banner>
            <BannerContent>
              <div className="title-display-big">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  facilisis, venenatis tortor eget.
                </p>
              </div>
              <BannerLink>
                <LinkButton to="/" inverse>
                  call to action
                </LinkButton>
              </BannerLink>
            </BannerContent>
          </Banner>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
          quis arcu accumsan aliquam. Donec tempus rhoncus felis vel facilisis.
          Quisque eleifend fermentum ex, sit amet interdum dolor dapibus vitae.
          Proin non sem vulputate, porttitor nibh eget, consectetur dolor. Sed
          tincidunt scelerisque quam, eu fringilla risus fermentum in. Proin
          mattis mi nec justo ullamcorper, nec vulputate mi venenatis.
          Suspendisse porta sagittis lacus, a tincidunt ante feugiat id.
          <br />
          <br />
          Duis dictum lorem ac orci imperdiet volutpat a ut augue. Quisque vel
          purus facilisis, sodales ex eu, aliquam lacus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed ut nisl quis arcu accumsan
          aliquam.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
          quis arcu accumsan aliquam. Donec tempus rhoncus felis vel facilisis.
          Quisque eleifend fermentum ex, sit amet interdum dolor dapibus vitae.
          Proin non sem vulputate, porttitor nibh eget, consectetur dolor. Sed
          tincidunt scelerisque quam, eu fringilla risus fermentum in. Proin
          mattis mi nec justo ullamcorper, nec vulputate mi venenatis.
          Suspendisse porta sagittis lacus, a tincidunt ante feugiat id.
          <br />
          <br />
          Duis dictum lorem ac orci imperdiet volutpat a ut augue. Quisque vel
          purus facilisis, sodales ex eu, aliquam lacus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed ut nisl quis arcu accumsan
          aliquam.
        </p>
      </AboutDescription>
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

export default Page
