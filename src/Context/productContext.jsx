import { createContext, useState } from "react";

export const SetState = createContext()

export function GetProduct({ children }) {
    const [ filterText, setFilterText ] = useState('')
    const [products, setProducts] = useState([])

    return (
        <SetState.Provider value={{
            filter: filterText, setFilter: setFilterText,
            products: products, setProducts: setProducts,
        }}>
            {children}
        </SetState.Provider> 
    )
}
