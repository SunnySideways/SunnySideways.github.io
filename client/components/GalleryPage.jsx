import React from 'react'

import { Stack } from '@mui/material'

import GalleryMenuDrawer from './GalleryMenuDrawer';
import GalleryGrid from './GalleryGrid';
import Data from './Data';

export default function GalleryPage (props) {

  const {enableMenu} = props
    
  // Create State for Gallery Data
  const [galleryData, setGalleryData] = React.useState(null)

  return (
    <Stack minHeight='100vh' style={{backgroundColor: 'black'}}>
        <Data targetFile={'./gallery.json'} setData={setGalleryData}/>
        <Stack height="100%" direction="row">
            <GalleryMenuDrawer hidden={!enableMenu}/>
            <GalleryGrid galleryData={galleryData}/>
        </Stack>
    </Stack>
  )
}
