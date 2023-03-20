import React from 'react'
export default function LegalPage (props) {
  
  const {hidden} = props

  if (hidden)
  {
    return ( <div></div> )
  }

  return (
    <div>Legal</div>
  )
}