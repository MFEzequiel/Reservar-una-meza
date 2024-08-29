import {  useCallback, useContext, useState } from 'react'
import { cl } from '../components/jquery'
import { SetState } from '../Context/productContext'

export function useAllFilter () {

  const { allFilter, setAllFilter } = useContext(SetState)

  const filterPriceAll = useCallback((ev) => {
    setObjectFilter(ev.target)
  },[])

  const setObjectFilter = (ev) => {
    const newFilter = {}
    
    if (ev.name === 'filterDefault') {
      newFilter.priceAll = true
      newFilter.priceOne = false
      newFilter.priceTwo = false
    }else if (ev.name === 'filterOne') {
      newFilter.priceAll = false
      newFilter.priceOne = true
      newFilter.priceTwo = false
    }else if (ev.name === 'filterTwo') {
      newFilter.priceAll = false
      newFilter.priceOne = false
      newFilter.priceTwo = true
    }else {
      cl('El no se reconose el nombre del filtro por precio.')
    }
    setAllFilter(newFilter)
  }

  return { allFilter, filterPriceAll }
}