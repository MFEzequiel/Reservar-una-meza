import { CompArticle } from './Card'


function ListOfProduct ({
  products,
  filterText,
  isCheked = 'price-all',
  classN
}) {

  const rows = []
  
  products.forEach(pro => {
    // if (
    //   pro.title.toLowerCase().indexOf(
    //   filterText.toLowerCase()) === -1) {
    //   return
    // }


    if (isCheked['price-all'] && !pro.price) {
      return
    }

    if (isCheked['price-one'] && pro.price >= 0 && pro.price > 99) {
      return
    }

    if (isCheked['price-two'] && pro.price >= 0 && pro.price < 100) {
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
      />
    )
  })
  return <>{rows}</>
}

function NoProduct () {
  return <p>No se encontro productos</p>
}

export function Product ({
  products,
  filterText,
  isCheked,
  classN
}) {
  const hasProducts = products?.length > 0
  return hasProducts ? (
    <ListOfProduct
      products={products}
      filterText={filterText}
      isCheked={isCheked}
      classN={classN}
    />
  ) : (
    <NoProduct />
  )
}
