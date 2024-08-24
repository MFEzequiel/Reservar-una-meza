import { useContext, useEffect, useState } from 'react'
import { SetState } from '../Context/productContext'

export function useProduct () {
  const { products, setProducts } = useContext(SetState)

  useEffect(() => {
    fetch('http://localhost:3000/product')
    .then(res => res.json())
    .then(data => setProducts(data.product))
  },[])

  const mappedProduct = products?.map(product => ({
    id: product.Id,
    title: product.Title,
    description: product.Description,
    poster: product.Poster,
    price: product.Price
  }))

  return { product: mappedProduct }
}
