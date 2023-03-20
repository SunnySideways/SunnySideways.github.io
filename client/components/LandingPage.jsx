import React from 'react'
export default function LandingPage (props) {

  this.name = "apple";
  const {hidden} = props

  if (hidden)
  {
    return ( <div></div> )
  }

  return (
    <div>Landing</div>
  )
}