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
  const [isPlaying, setIsPlaying] = useState(false)
  const { elapsedTime, reset } = useElapsedTime({
    duration: duration * 60,
    isPlaying: isPlaying,
    updateInterval: 1,
    onComplete: onComplete,
  })

  const [remainingSeconds, setRemainingSeconds] = useState(
    duration * 60 - elapsedTime,
  )

  useEffect(() => {
    setRemainingSeconds(duration * 60 - elapsedTime)
  }, [duration, elapsedTime])

  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = Math.ceil(remainingSeconds % 60)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    circumference - (elapsedTime / (duration * 60)) * circumference

  return (
    <div className="h-72">
      <button
        className="mb-10 px-10 py-2 rounded-3xl bg-gray-700"
        onClick={() => setIsPlaying(t => !t)}
        disabled={remainingSeconds === 0}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        className="mb-10 px-10 py-2 rounded-3xl bg-gray-700"
        onClick={() => {
          reset()
          setIsPlaying(false)
        }}
      >
        Reset
      </button>
      <div
        className="relative flex justify-center w-]400px] h-[400px]"
        aria-label="countdown"
        role="progressbar"
      >
        <svg height={size} width={size} className="absolute">
          <circle
            stroke="#8605E8"
            fill="transparent"
            strokeWidth={strokeWidth}
            style={{ strokeDashoffset }}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>

        <svg width={size} height={size} className="absolute z-10 -rotate-90">
          <circle
            data-testid="circle"
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>

        <div className="flex items-center font-bold text-8xl">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  )
}

export { CountdownCircle }
