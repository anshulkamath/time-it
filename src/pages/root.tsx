import React, { useCallback, useState } from 'react'

import HomePage from 'pages/homePage'
import ReflexPage from 'pages/reflexPage'

import 'stylesheets/root.css'

const RootPage = () => {
  const [pageIndex, setPageIndex] = useState(0)

  let Page: React.ReactElement = <></>
  const startCallback = useCallback(() => setPageIndex(1), [])

  if (pageIndex === 0) {
    Page = <HomePage onClick={startCallback} />
  } else if (pageIndex === 1) {
    Page = <ReflexPage />
  }

  return <div className='root-container'>{Page}</div>
}

export default RootPage
