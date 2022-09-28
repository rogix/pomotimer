import { useEffect, useState } from 'react'

function useCountdown(duration: number) {
  const [remainingTime, setRemainingTime] = useState(duration * 100)

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1 / 100)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [remainingTime])

  return remainingTime
}

export { useCountdown }
