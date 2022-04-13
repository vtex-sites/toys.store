import React from 'react'
import { Image } from 'src/components/ui/Image'
import { Carousel } from '@faststore/ui'

interface JsonImage {
  url: string
  alternateName: string
}
interface Props {
  images: JsonImage[]
  carousel?: boolean
}

function ProductImage({ images, carousel }: Props) {
  return (
    <>
      {carousel ? (
        <Carousel
          infiniteMode
          controls="paginationBullets"
          transition={{ duration: 400, property: 'transform' }}
        >
          {images.map((singleImage, index) => {
            return (
              <Image
                preload
                loading="eager"
                src={singleImage.url}
                alt={singleImage.alternateName}
                width={802}
                height={802}
                sizes="(max-width: 768px) 25vw, 50vw"
                key={index}
              />
            )
          })}
        </Carousel>
      ) : (
        images.map((singleImage2, index2) => {
          return (
            <Image
              preload
              loading="eager"
              src={singleImage2.url}
              alt={singleImage2.alternateName}
              width={802}
              height={802}
              sizes="(max-width: 768px) 25vw, 50vw"
              key={index2}
            />
          )
        })
      )}
    </>
  )
}

export default ProductImage
