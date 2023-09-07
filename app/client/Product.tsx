'use client'

import Image from "next/image"
import { FC } from "react"
import Stripe from "stripe"

export const ClientProduct:FC<{
    product: Stripe.Product
}> = ({product}) => {

    return (
        <div>
            <h1>{product.name}</h1>
              <Image
                src={product.images[0]}
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
        </div>
    )
}