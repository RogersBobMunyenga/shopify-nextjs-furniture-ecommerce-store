import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product }) => {
    const { handle, title } = product.node
    
    const {altText, originalSrc} = product.node.images.edges[0].node


  return (
      <Link href={`/product/${handle}`}>
          <a className='group'>
              <div className="w-full bg-gray-200 rounded-3xl">
                  <div className="relative group-hover:opacity-75 h-72">
                      <Image
                          src={originalSrc}
                          alt={altText}
                          layout="fill"
                          objectFit='cover'
                      />   
                </div>
              </div>
          </a> 
      </Link>
  )
}

export default ProductCard