export function Button ({ count, click }) {
  return (
    <button className='bt' onClick={click}>
      As click {count}
    </button>
  )
}
