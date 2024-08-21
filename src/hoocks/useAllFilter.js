import {  useState } from 'react'

export function useAllFilter () {
  const [allFilter, setAllFilter] = useState({
    'price-all': true,
    'price-one': false,
    'price-two': false
  })

  const filterPriceAll = () => {
    const newAllFilter = {
      'price-all': true,
      'price-one': false,
      'price-two': false
    }
    setAllFilter(newAllFilter)
  }

  const filterPriceOne = () => {
    const newAllFilter = {
      'price-all': false,
      'price-one': true,
      'price-two': false
    }
    setAllFilter(newAllFilter)
  }

  const filterPriceTwo = () => {
    const newAllFilter = {
      'price-all': false,
      'price-one': false,
      'price-two': true
    }
    setAllFilter(newAllFilter)
  }

  return { allFilter, filterPriceAll, filterPriceOne, filterPriceTwo }
}

