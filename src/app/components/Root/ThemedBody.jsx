"use client"
import { useAtomValue } from 'jotai'
import Navbar from '../Navbar/Navbar'
import React from 'react'
import { currentTheme as currentThemeAtom } from '@/store/themeStore'
import SearchToolbar from '../Search/Search'

const ThemedBody = ({children}) => {
    const currentTheme = useAtomValue(currentThemeAtom)
  return (
    <body className={`${currentTheme} flex flex-col`}>
          <SearchToolbar></SearchToolbar>
          <Navbar />
          {children}
        </body>
  )
}

export default ThemedBody