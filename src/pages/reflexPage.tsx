import React, { useState, useEffect } from 'react'

import Defaults from 'constants/defaults'
import { generateRandomTime } from 'util/gameLogic'

import 'stylesheets/reflexPage.css'

const WaitPage: React.FunctionComponent = () => <div className='wait-page' />
const FlashPage: React.FunctionComponent = () => <div className='flash-page' />

const ReflexPage: React.FunctionComponent = () => {
  const [started, setStarted] = useState(false)
  const [stopped, setStopped] = useState(false)

  const startTime = Defaults.defaultStartTime
  const randomTime = generateRandomTime(Defaults.defaultDuration, startTime)

  useEffect(() => {
    if (stopped) {
      return () => {}
    }

    const intervalId = setInterval(() => {
      setStarted(true)
    }, startTime)

    return () => clearInterval(intervalId)
  }, [stopped])

  useEffect(() => {
    if (!started) {
      return () => {}
    }

    const intervalId = setInterval(() => {
      setStarted(false)
      setStopped(true)
    }, randomTime)

    return () => clearInterval(intervalId)
  }, [started])

  return started ? <FlashPage /> : <WaitPage />
}

export default ReflexPage
