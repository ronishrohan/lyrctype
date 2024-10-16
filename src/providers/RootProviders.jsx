import { Provider } from 'jotai'
import React from 'react'

const RootProviders = ({children}) => {
  return (
    <Provider>{children}</Provider>
  )
}

export default RootProviders