"use client"
import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const SearchToolbarContext = createContext({})

const SearchToolbarProvider = ({children}) => {
    const [enabled, setEnabled] = useState(false);

  return (
    <SearchToolbarContext.Provider value={{enabled, setEnabled}}>
      {children}
    </SearchToolbarContext.Provider>
  )
}

const useSearchToolbar = () => {
    
  return useContext(SearchToolbarContext);
};

export {useSearchToolbar, SearchToolbarProvider}