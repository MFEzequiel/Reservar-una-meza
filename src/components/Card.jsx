export function CompArticle ({ keys, img, name, text, price, classN }) {
  const className = `card scal__img ${classN ?? ''}`
  return (
    <>
      <article key={keys} className={className}>
        <img
          className='card__image scal__img'
          src={img}
          loading='legazi'
          alt={`Imagen de ${name}`}
        />
        <div className='card__text'>
          <h2 className='text__title'>{name}</h2>
          <p className='card__paragraph'>{text} <span>{price}$</span>
          </p>
          <button className="card-button">Detalle</button>
        </div>
      </article>
    </>
  )
}
