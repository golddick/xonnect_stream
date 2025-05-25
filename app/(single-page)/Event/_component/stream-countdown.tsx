"use client"

import { useState, useEffect } from "react"

interface StreamCountdownProps {
  streamDate: string
  isLive: boolean
}

export default function StreamCountdown({ streamDate, isLive }: StreamCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const streamTime = new Date(streamDate).getTime()
      const difference = streamTime - now

      if (difference <= 0) {
        setHasStarted(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [streamDate])

  // === DISPLAY LOGIC ===
  if (isLive) {
    return (
      <div className="bg-red-800 text-white p-3 rounded-lg text-center">
        <p className="font-bold">Stream is Live Now!</p>
      </div>
    )
  }

  if (hasStarted && !isLive) {
    return (
      <div className="bg-black animate-pulse border-b border-r text-white p-3 rounded-lg text-center">
        <p className="font-light text-red-700">Stream is over. Watch highlight</p>
      </div>
    )
  }

  // Not started yet
  return (
    <div className="bg-gray-800 p-3 rounded-lg">
      <p className="text-gray-300 text-sm mb-2 text-center">Stream starts in</p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="bg-gray-900 rounded-md p-2 shadow-sm">
            <span className="text-xl font-bold text-white">{timeLeft.days}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">Days</span>
        </div>
        <div>
          <div className="bg-gray-900 rounded-md p-2 shadow-sm">
            <span className="text-xl font-bold text-white">{timeLeft.hours}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">Hours</span>
        </div>
        <div>
          <div className="bg-gray-900 rounded-md p-2 shadow-sm">
            <span className="text-xl font-bold text-white">{timeLeft.minutes}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">Mins</span>
        </div>
        <div>
          <div className="bg-gray-900 rounded-md p-2 shadow-sm">
            <span className="text-xl font-bold text-white">{timeLeft.seconds}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">Secs</span>
        </div>
      </div>
    </div>
  )
}
