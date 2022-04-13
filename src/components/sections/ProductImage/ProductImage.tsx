import React from 'react'
import { Image } from 'src/components/ui/Image'
import CarouselShelf from 'src/components/common/CarouselShelf'

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
        <CarouselShelf
          itensPerPageSlider={1}
          controls="paginationBullets"
          id="carousel-images"
          aria-label="carousel-images-pdp"
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
        </CarouselShelf>
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
