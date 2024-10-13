import React from 'react'

const Button = ({onClick, title,...others}) => {
  return (
    <div {...others} title={title}>
        <button onClick={onClick} className='size-full rounded-md border-2 border-border hover:border-primary bg-background hover:bg-primary_tint' ></button>
    </div>
  )
}

export default Button