import React from 'react'
import { Image } from 'src/components/ui/Image'

interface Props {
  image: string
  alt: string
}

function ProductImage({ image, alt }: Props) {
  return (
    <Image
      preload
      loading="eager"
      src={image}
      alt={alt}
      width={802}
      height={802}
      sizes="(max-width: 768px) 25vw, 50vw"
    />
  )
}

export default ProductImage
