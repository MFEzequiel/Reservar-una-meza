import { useNextCarousel } from "../hoocks/useNextCarousel"


export function Carousel() {
    const { index } = useNextCarousel() 
    return(
        <>
            <div className='container-carousel'>
                <div className='carousel-roulet'>
                    <div className={`roulet-index ${index.indexZero ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src='/src/assets/img/carousel-1.jpg'
                        alt=''
                        />
                    </div>
                    <div className={`roulet-index ${index.indexOne ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src='/src/assets/img/carousel-2.jpg'
                        loading='legazi'
                        alt=''
                        />
                        <button>Shop Now</button>
                    </div>
                    <div className={`roulet-index ${index.indexTwo ? 'roulet-index-active': ''}`}>
                        <img
                        className='index-image'
                        src='/src/assets/img/carousel-3.jpg'
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
                    src='/src/assets/img/offer-1.jpg'
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
                    src='/src/assets/img/offer-2.jpg'
                    alt=''
                    />
                </div>
                </div>
            </div>
        </>
    )
} 