import React, { useCallback, useState } from 'react'

import HomePage from 'pages/homePage'

import 'stylesheets/root.css'

const RootPage = () => {
  const [pageIndex, setPageIndex] = useState(0)

  let Page: React.ReactElement = <></>
  const startCallback = useCallback(() => setPageIndex(1), [])

  if (pageIndex === 0) {
    Page = <HomePage onClick={startCallback} />
  }

  return <div className='root-container'>{Page}</div>
}

export default RootPage
