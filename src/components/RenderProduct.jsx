import { useNavigate } from 'react-router-dom'
import { useProduct } from '../hoocks/useProduct'
import { CompArticle } from './Card'
import { cl } from './jquery'
import { SetState } from '../Context/productContext'
import { useContext } from 'react'


function ListOfProduct ({
  products,
  filter,
  checkedFilter = 'price-All',
  classN
}) {
  const navigation = useNavigate()

  const productGetId = (id) => {
    navigation(`/product/${id}`)
  }

  const rows = []

  products.forEach(pro => {
    if (
      pro.title.toLowerCase().indexOf(
      filter.toLowerCase()) === -1) {
      return
    }
    
    if (checkedFilter.priceAll && !pro.price) {
      return
    }

    if (checkedFilter.priceOne && pro.price >= 0 && pro.price > 99) {
      return
    }

    if (checkedFilter.priceTwo && pro.price >= 0 && pro.price < 100) {
      return
    }

    rows.push(
      <CompArticle
        key={pro.id}
        keys={pro.id}
        img={pro.poster}
        name={pro.title}
        text={pro.paragraph}
        price={pro.price}
        classN={classN}
        onGetId={() => productGetId(pro.id)}
      />
    )
  })
  return <>{rows}</>
}

function NoProduct () {
  return <p className='filterable-title-text title'>No se encontro productos</p>
}

export function Product ({
  classN
}) {
  const { product } = useProduct()
  const { filter, allFilter } = useContext(SetState)
  const hasProducts = product?.length > 0
  
  return hasProducts ? (
    <ListOfProduct
      filter={filter}
      checkedFilter={allFilter}
      products={product}
      classN={classN}
    />
  ) : (
    <NoProduct />
  )
}
