import { useNextCarousel } from "../hoocks/useNextCarousel"
import carouselImage1 from '../../public/img/carousel-1.jpg'
import carouselImage2 from '../../public/img/carousel-2.jpg'
import carouselImage3 from  '../../public/img/carousel-3.jpg'
import carouselImage4 from '../../public/img/offer-1.jpg'
import carouselImage5 from '../../public/img/offer-2.jpg'



export function Carousel() {
    const { index } = useNextCarousel() 
    return(
        <>
            <div className='container-carousel'>
                <div className='carousel-roulet'>
                    <div className={`roulet-index ${index.indexZero ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src={carouselImage1}
                        alt=''
                        />
                    </div>
                    <div className={`roulet-index ${index.indexOne ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src={carouselImage2}
                        loading='legazi'
                        alt=''
                        />
                        <button>Shop Now</button>
                    </div>
                    <div className={`roulet-index ${index.indexTwo ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src={carouselImage3}
                        loading='legazi'
                        alt=''
                        />
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='carousel-offer'>
                <div className='offer-container pos-relative'>
                    <article className='container-text'>
                    <h2 className='pos-absolute'>title</h2>
                    <p className='pos-absolute flex-filterable'>paragraph</p>
                    </article>
                    <img
                    className='offer-image scal-img'
                    src={carouselImage4}
                    alt=''
                    />
                </div>
                <div className='offer-container pos-relative'>
                    <article className='container-text'>
                    <h2 className='pos-absolute'>title</h2>
                    <p className='pos-absolute'>paragraph</p>
                    </article>
                    <img
                    className='offer-image scal-img'
                    src={carouselImage5}
                    alt=''
                    />
                </div>
                </div>
            </div>
        </>
    )
} 