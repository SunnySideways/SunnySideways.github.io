import React from 'react'
export default function CommissionPage (props) {
 
  const {hidden} = props

  if (hidden)
  {
    return ( <div></div> )
  }

  return (
    <div>Commision</div>
  )
}