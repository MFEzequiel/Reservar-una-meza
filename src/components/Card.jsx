export function CompArticle ({ keys, img, name, text, price, classN = '', onGetId }) {
  const className = `card scal-img ${classN}`
  return (
    <>
      <article key={keys} className={className}>
        <img
          className='card-image scal-img'
          src={img}
          loading='lazy'
          alt={`Imagen del  product ${name}`}
        />
        <div className='card-text'>
          <p className='text-title Subtitle'>{name}</p>
          <p className='card-paragraph'>{text} <span>{price}$</span>
          </p>
          <button onClick={onGetId} className="card-button paragraph" >Detalle</button>
        </div>
      </article>
    </>
  )
}
