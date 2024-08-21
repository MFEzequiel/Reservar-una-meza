import { useProduct } from '../hoocks/useProduct'
import { Product } from './RenderProduct'

export function Home ({ filterText }) {
  const { product } = useProduct()

  return (
    <>
      <div className='container__carousel'>
        <div className='carousel__roulet'>
          <div className='roulet__index'>
            <img
              className='index__image'
              src='/src/assets/img/carousel-1.jpg'
              alt=''
            />
          </div>
          <div className='roulet__index'>
            <img
              className='index__image'
              src='/src/assets/img/carousel-2.jpg'
              loading='legazi'
              alt=''
            />
            <button>Shop Now</button>
          </div>
          <div className='roulet__index'>
            <img
              className='index__image'
              src='/src/assets/img/carousel-3.jpg'
              loading='legazi'
              alt=''
            />
            <button>Shop Now</button>
          </div>
        </div>
        <div className='carousel__offer'>
          <div className='offer__container pos__relative'>
            <article className='container__text'>
              <h2 className='pos__absolute'>title</h2>
              <p className='pos__absolute flex-filterable'>paragraph</p>
            </article>
            <img
              className='offer__image scal__img'
              src='/src/assets/img/offer-1.jpg'
              alt=''
            />
          </div>
          <div className='offer__container pos__relative'>
            <article className='container__text'>
              <h2 className='pos__absolute'>title</h2>
              <p className='pos__absolute'>paragraph</p>
            </article>
            <img
              className='offer__image scal__img'
              src='/src/assets/img/offer-2.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <p className='filterable-title pos-relative'>
        <span className='filterable-title-text title'>FEATURED PRODUCTS</span>
      </p> 
      <div className='container-products'>
        <Product products={product} filterText={filterText} />
      </div>
    </>
  )
}
