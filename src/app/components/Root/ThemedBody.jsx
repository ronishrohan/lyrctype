"use client"
import { useAtomValue } from 'jotai'
import Navbar from '../Navbar/Navbar'
import React from 'react'
import { currentTheme as currentThemeAtom } from '@/store/themeStore'

const ThemedBody = ({children}) => {
    const currentTheme = useAtomValue(currentThemeAtom)
  return (
    <body className={`${currentTheme} flex flex-col`}>
          <Navbar />
          {children}
        </body>
  )
}

export default ThemedBody