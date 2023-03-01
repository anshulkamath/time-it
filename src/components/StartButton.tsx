import React from 'react'

import 'stylesheets/startButton.css'

interface StartButtonProps {
  onClick: () => void
  text: string
}

const StartButton: React.FunctionComponent<StartButtonProps> = ({ onClick, text }) => (
  <button className='start-button' type='submit' onClick={onClick}>
    <h1 className='mono start-button-text'>{text}</h1>
  </button>
)

export default StartButton
