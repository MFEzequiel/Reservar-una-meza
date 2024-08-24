import { Carousel } from './Carousel'
import { Product } from './RenderProduct'

export function Home () {

  return (
    <>
      <Carousel />
      <p className='filterable-title pos-relative'>
        <span className='filterable-title-text title'>FEATURED PRODUCTS</span>
      </p> 
      <div className='container-products'>
        <Product />
      </div>
    </>
  )
}
