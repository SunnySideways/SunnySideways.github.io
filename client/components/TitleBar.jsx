import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Stack, } from '@mui/material'

export default function TitleBar(props)
{
  const {title, subTitle} = props
  const {titleColor, subTitleColor} = props
  return (
    <AppBar position='sticky' color='darkPrimary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography color={titleColor} variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Stack direction='row' spacing={5} alignItems='center'>
              <img height='64px' src='/images/welcome.png' alt="Cute character saying Welcome!"></img>
              <Typography color={subTitleColor} variant="subtitle1">
                {subTitle}
              </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
  )
}

// Declare the 'types' of all props
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  titleColor: PropTypes.string,
  subTitleColor: PropTypes.string
}

TitleBar.defaultProps = {
  subTitle: '',
  titleColor: '',
  subTitleColor: ''
}