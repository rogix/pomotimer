import { useEffect, useState } from 'react'
import { useElapsedTime } from 'use-elapsed-time'

interface CountdownCircleProps {
  size: number
  strokeWidth: number
  duration: number
  color: string
  onComplete: () => void
}

function CountdownCircle({
  size,
  strokeWidth,
  color,
  duration,
  onComplete,
}: CountdownCircleProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 60)
  const [isPlaying, setIsPlaying] = useState(false)
  const [remainingSeconds, setRemainingSeconds] = useState(remainingTime)
  const { elapsedTime } = useElapsedTime({
    duration: duration * 60,
    isPlaying: isPlaying,
    updateInterval: 1,
  })

  const remainingTimes = Math.ceil(duration * 60 - elapsedTime)

  useEffect(() => {
    setRemainingSeconds(t => t - 1)
  }, [elapsedTime])

  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = Math.ceil(remainingSeconds % 60)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    circumference - (remainingTime / duration) * circumference

  return (
    <div className="relative">
      <button onClick={() => setIsPlaying(t => !t)}>pause</button>
      <svg height={size} width={size} className="absolute">
        <circle
          stroke="#d9d9d9"
          fill="transparent"
          strokeWidth={strokeWidth}
          style={{ strokeDashoffset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      <svg width={size} height={size} className="absolute z-10">
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      <div className="absolute z-20 inline-block font-bold text-6xl left-20 top-28 text-red-700 right-0 bottom-0 m-auto">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  )
}

export { CountdownCircle }
