export function Page () {
  return (
    <>
      <p className='filterable-title pos-relative'>
        <span className='filterable-title-text title'>CONTACTANOS</span>
      </p>
      <form className="form-contact">
          <label className="form-contact-label">
            Nombre
            <input
              className="form-contact-input"
              type='text'
              placeholder='Ezequiel'
            />
          </label>
          <label className="form-contact-label">
            Email
            <input
              className="form-contact-input"
              type='email'
              placeholder='example@gmail.com'
            />
          </label>
          <label className="form-contact-label">
            Mensaje
            <textarea className="form-contact-messeger" name="mensaje" cols="30" rows="10" placeholder="mensaje..."></textarea>
          </label>
      </form>
      <div className='container'>
        <div className='col-lh-8'>
          <p className='cont-title pos-relative'>
            <span className='title-text'>Billing Address</span>
          </p>
          
        </div>
        <div className='col-lh-4'>
          <p className='cont-title pos-relative'>
            <span className='title-text'>Order Total</span>
          </p>
        </div>
      </div>
    </>
  )
}
