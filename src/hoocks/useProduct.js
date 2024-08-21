import { useContext, useEffect } from 'react'
import { SetProduct } from '../Context/productContext'

export function useProduct () {
  const { products, setProducts } = useContext(SetProduct)
  
  useEffect(() => {
    fetch('http://localhost:3000/product')
    .then(res => res.json())
    .then(data => setProducts(data.Search))
  },[])

  const mappedProduct = products?.map(product => ({
    id: product.Id,
    title: product.Title,
    paragraph: product.Paragraph,
    poster: product.Poster,
    price: product.Price
  }))

  return { product: mappedProduct }
}
