import { useCallback, useEffect, useState } from 'react'

export function useNextCarousel () {
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState({
    indexZero: true,
    indexOne: false,
    indexTwo: false
  })

  const show = useCallback(countt => {
    const newIndex = {}

    if (countt === 1) {
      newIndex.indexZero = true
      newIndex.indexOne = false
      newIndex.indexTwo = false
    } else if (countt === 2) {
      newIndex.indexZero = false
      newIndex.indexOne = true
      newIndex.indexTwo = false
    } else if (countt === 3) {
      newIndex.indexZero = false
      newIndex.indexOne = false
      newIndex.indexTwo = true
    }

    setIndex(newIndex)
  }, [])

  const nextSlide = useCallback(() => {
    const newCount = (count + 1) % 3 // El conteo regresa a 0 después de 2
    setCount(newCount)
    show(newCount + 1)
  }, [count, show])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000)
    return () => clearInterval(intervalId) // Limpia el intervalo cuando el componente se desmonte
  }, [nextSlide])

  return { index }
}
