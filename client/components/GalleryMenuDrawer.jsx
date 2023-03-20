import React from 'react'

import { Box, Stack, IconButton, Drawer, Toolbar, Divider, DialogContent } from '@mui/material'
import {
  ArrowForwardIosRounded as OpenArrow,
  ArrowBackIosRounded as CloseArrow,
} from '@mui/icons-material'

export default function GalleryMenuDrawer(props) {

  const {hidden} = props
  if (hidden)
  {
    return ( <div></div> )
  }
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    if(open !== newOpen)
    setOpen(newOpen)
  }

  return (
    <>
      <Drawer variant="permanent" >
        <DialogContent sx={{width: '50px', overflow: 'hidden', padding: 0}}>
          {/* Spacer */} <Toolbar></Toolbar>
          <IconButton sx={{ height: '100%', width: '50px', borderRadius: 0 }} variant="outlined" onClick={toggleDrawer(true)} ><OpenArrow/></IconButton>
        </DialogContent>
      </Drawer>
      <Drawer
        open={open}
        variant="persistent"
        PaperProps={{ sx: { width: '50%'}}}
      >
        {/* Spacer */} <Toolbar></Toolbar>
        {/* Spacer */} <Toolbar></Toolbar>
        <Stack container height="100%" direction="row">
          <h1>I am the thing for Gallery Settings</h1>
          <Divider orientation='vertical'/>
          <Box height="100%">
            <IconButton sx={{ height: '100%', borderRadius: 0}} variant="outlined" onClick={toggleDrawer(false)} ><CloseArrow/></IconButton>
          </Box>
        </Stack>
      </Drawer>
    </>
  )
}
