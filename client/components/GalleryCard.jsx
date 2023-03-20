import React from 'react'

import { Grid } from '@mui/material'

const gameSummaryStyle = {
  border: '3px solid darkgrey',
  boxShadow: '3px 3px 6px grey',
  transition: 'box-shadow 0.3s ease-in-out'
}

const imageStyle = {
    display: 'block',
    height: '350px'
}

export default function GalleryCard (props) {

  const {index, piece, clickCallback} = props

  const onLinkClicked = (event) => {
      event.preventDefault()
      if (clickCallback) {
        clickCallback(index)
      }
  }

  return (
    <Grid item>
      <div style={gameSummaryStyle}>
        <a href="#" onClick={onLinkClicked}>
          <img
            src={piece.FullResURL}
            alt={`Image of ${piece.Title}`}
            style={imageStyle}
          />
        </a>
      </div>
    </Grid>
  )
}
