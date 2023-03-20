import React from 'react'

import { Grid } from '@mui/material'
import GalleryCard from './GalleryCard'

export default function GalleryGrid (props) {
  const { imageClickCallback, galleryData } = props

  // Check if the data is ready
  if (!Array.isArray(galleryData) || galleryData.length < 1) {
    return (
      <Grid container spacing={2}>
        <p>Loading ...</p>
      </Grid>
    )
  }

  const gallery = galleryData.map(
    (piece, index) => (<GalleryCard key={index} index={index} piece={piece} imageClickCallback={imageClickCallback} />)
  )

  return (
    <Grid container rowSpacing={2} columnSpacing={2} alignItems="center" justifyContent="space-evenly" padding={2}>
      {gallery}
    </Grid>
  )
}