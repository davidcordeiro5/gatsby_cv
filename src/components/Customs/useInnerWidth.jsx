import {useEffect, useState} from 'react'

function useInnerWidth () {
  const [width, setwidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWidth = () => {setwidth(window.innerWidth)}

    window.addEventListener("resize", handleWidth);
  }, [])

  return width
}

export default useInnerWidth;