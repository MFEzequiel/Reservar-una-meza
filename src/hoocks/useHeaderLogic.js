import { useCallback, useContext, useState } from "react"
import { SetState } from "../Context/productContext"
import { $, $$, cl } from '../components/jquery'

export function useHeaderLogic () {
  const { setFilter } = useContext(SetState)
  const { theme, setTheme } = useContext(SetState)

  const handleClick = useCallback(() => {
    const nav = $('.header-nav')
    const btl = $$('.header-button-line')

    btl.forEach(el => {
      el.classList.toggle('header-button-active')
    })
    nav.classList.toggle('header-nav-active')
  },[])

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleSubmit = useCallback(ev => {
    ev.preventDefault()
    const form = new FormData(ev.target)
    let query = form.get('query')
    setFilter(query)
  },[])

  return { handleClick, handleTheme, handleSubmit }
}
