import { Product } from './RenderProduct'
import { useAllFilter } from '../hoocks/useAllFilter'

function AllFilter({allFilter, onSetAllFilter }){
  return (
    <article className='filterable-container'>
      <form action='' className='filterable-container-form'>
          <label className='form-container paragraph'>
            <input
              type='checkbox'
              checked={allFilter.priceAll}
              onChange={onSetAllFilter}
              name='filterDefault'
            />
            Todos
          </label>
          <label className='form-container paragraph'>
            <input
              type='checkbox'
              checked={allFilter.priceOne}
              onChange={onSetAllFilter}
              name='filterOne'
            />
            $0 - $100
          </label>
          <label className='form-container paragraph'>
            <input
              type='checkbox'
              checked={allFilter.priceTwo}
              onChange={onSetAllFilter}
              name='filterTwo'
            />
            $100 - $300
          </label>
      </form>
    </article>
  )
}

export function Shop () {
  const { allFilter, filterPriceAll } = useAllFilter()

  return (
    <div className='container-shop'>
      <div className='filterable'>
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text filterable-title-text-size'>FILTER BY PRICE</span>
        </p>
        <AllFilter allFilter={allFilter} onSetAllFilter={filterPriceAll} />
      </div>
      <div className='container-products'>
        <Product
          allFilter={allFilter}
          classN={'card-shop'}
        />
      </div>
    </div>
  )
}
