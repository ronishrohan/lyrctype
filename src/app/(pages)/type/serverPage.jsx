import React from 'react'
import TypePage from './clientPage'
import Genius from '@/util/genius/genius'


const ServerTypePage =  async ({id }) => {
  

  const data = await Genius.getSongDetails(id)
  
  

  return (
 <TypePage key={id} songData={data} ></TypePage>
  )
}

export default ServerTypePage