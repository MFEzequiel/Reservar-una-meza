import { useParams } from 'react-router-dom'
import { cl } from './jquery'
import { useContext } from 'react'
import { SetState } from '../Context/productContext'
import { useProduct } from '../hoocks/useProduct'

function ProdutDetail({ image, title, price, description }) {
    return (

        <section className="container-shopDetail">
            <pircture className="container-image">
                <img src={image} alt={`Imagen de ${title}`} className="image-product" />
            </pircture>
            <div className="shopDetail-paragraph">
                
                <p className="title fontSizaRemTitle">{title}</p>
                <p className="subTitle fontSizaRemSubTitle">Valor {price}$</p>
                <p className="paragraph">{description}</p>
            </div>
        </section>
    )
}

export function ShowDetail() {
    const { id } = useParams()
    const { product } = useProduct()
    
    return (
        <>
        {
            product.map(el => {
                if (el.id === id) {
                    return <ProdutDetail image={el.poster} title={el.title} price={el.price} description={el.description} />
                }
            })
        }
        </>
    )
}