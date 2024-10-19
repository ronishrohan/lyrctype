import React from 'react'
import TypePage from './clientPage'
import Genius from '@/util/genius/genius'


const MainTypePage =  async ({searchParams }) => {
  

  const data = await Genius.getSongDetails(searchParams.id)
  

  return (
    <TypePage songData={data} ></TypePage>
  )
}

export default MainTypePage