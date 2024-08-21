import { createContext, useState } from "react";

export const SetProduct = createContext()

export function GetProduct({ children }) {
    const [products, setProducts] = useState([])

    return (
        <SetProduct.Provider value={{
            products: products,
            setProducts: setProducts
        }}>
            {children}
        </SetProduct.Provider> 
    )
}