import React from 'react'

import StartButton from 'components/StartButton'

import 'stylesheets/homePage.css'

interface HomeProps {
  onClick: () => void
}

const HomePage: React.FunctionComponent<HomeProps> = ({ onClick }) => (
  <div className='home-box'>
    <div className='home-text-box'>
      <h2>Welcome to</h2>
      <h1 className='title'>Time-It!</h1>
      <h2>Press the start button to begin the game.</h2>
    </div>
    <StartButton text='Start' onClick={onClick} />
  </div>
)

export default HomePage
