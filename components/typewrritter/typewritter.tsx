import React, { useEffect, useState } from "react"
import { Button } from "components/Button/Button"

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const typeNextCharacter = () => {
      if (currentIndex === text.length) {
        setCurrentIndex(0)
        setDisplayText("")
      } else {
        setDisplayText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }

    const interval = setInterval(typeNextCharacter, 400)

    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, text])

  return <Button intent="secondary">{displayText}</Button>
}

export default Typewriter
