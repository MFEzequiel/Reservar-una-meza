import { createContext, useCallback, useEffect, useState } from "react";
import { $, cl } from "../components/jquery";

export const SetState = createContext()

export function GetProduct({ children }) {
    const [theme, setTheme] = useState('light')
    const [ filterText, setFilterText ] = useState('')
    const [products, setProducts] = useState([])
    const [allFilter, setAllFilter] = useState({
        priceAll: true,
        priceOne: false,
        priceTwo: false
    })

    const html = $('html')
    html.setAttribute('data-theme', theme)

    useEffect(() => {
        if ( window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches){
            return setTheme('light')
        } else {
            return setTheme('dark')
        }
    },[])

    window.matchMedia(`(prefers-color-scheme: ${theme})`).addEventListener('change', () => {
      if ( window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches){
        return setTheme('light')
      } else {
        return setTheme('dark')
      }
    });

    return (
        <SetState.Provider value={{
            theme:theme, setTheme: setTheme,
            filter: filterText, setFilter: setFilterText,
            products: products, setProducts: setProducts,
            allFilter: allFilter, setAllFilter: setAllFilter,
        }}>
            {children}
        </SetState.Provider> 
    )
}
