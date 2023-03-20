import React from 'react'
export default function AboutMePage (props) {
  
  const {hidden} = props

  if (hidden)
  {
    return ( <div></div> )
  }

  return (
    <div>About Me</div>
  )
}