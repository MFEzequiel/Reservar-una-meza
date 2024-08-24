import { useContext, useState } from "react"
import { SetState } from "../Context/productContext"
import { $, $$, cl } from '../components/jquery'

export function useHeaderLogic () {
  const { setFilter } = useContext(SetState)

  const handleClick = () => {
    const nav = $('.header-nav')
    const btl = $$('.header-button-line')

    btl.forEach(el => {
      el.classList.toggle('header-button-active')
    })
    nav.classList.toggle('header-nav-active')
  }

  const handleTheme = () => {
    const html = document.querySelector('html')
    const htmlAtribute = document
      .querySelector('html')
      .getAttribute('data-theme')

    if (htmlAtribute === 'light') {
      document.querySelector('html').setAttribute('data-theme', 'dark')
    } else {
      html.setAttribute('data-theme', 'light')
    }
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    const form = new FormData(ev.target)
    let query = form.get('query')
    setFilter(query)
  }

  return { handleClick, handleTheme, handleSubmit }
}
