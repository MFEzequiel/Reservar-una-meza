import { useProduct } from '../hoocks/useProduct'
import { Product } from './RenderProduct'
import { useAllFilter } from '../hoocks/useAllFilter'

export function Shop ({ filterText }) {
  const { product } = useProduct()
  const { allFilter, filterPriceAll, filterPriceOne, filterPriceTwo } = useAllFilter()

  return (
    <div className='container-shop'>
      <div className='filterable'>
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text filterable-title-text-size'>FILTER BY PRICE</span>
        </p>
        <article className='filterable-container'>
          <form action='' className='filterable-container-form'>
              <label className='form-container paragraph'>
                <input
                  type='checkbox'
                  checked={allFilter['price-all']}
                  onChange={filterPriceAll}
                />
                Todos
              </label>
              <label className='form-container paragraph'>
                <input
                  type='checkbox'
                  checked={allFilter['price-one']}
                  onChange={filterPriceOne}
                />
                $0 - $100
              </label>
              <label className='form-container paragraph'>
                <input
                  type='checkbox'
                  checked={allFilter['price-two']}
                  onChange={filterPriceTwo}
                />
                $100 - $300
              </label>
          </form>
        </article>
      </div>
      <div className='container-products'>
        <Product
          products={product}
          filterText={filterText}
          isCheked={allFilter}
          classN={'card-shop'}
        />
      </div>
    </div>
  )
}
