import React from 'react'

import TitleBar from './TitleBar'
import Navigation from './Navigation'
import LandingPage from './LandingPage'
import GalleryPage from './GalleryPage'
import CommissionPage from './CommissionPage'
import AboutMePage from './AboutMePage'
import LegalPage from './LegalPage'
import Data from './Data'

import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

import {
  SentimentVerySatisfied as WelcomeSmileIcon,
  CottageTwoTone as CottageIcon,
  PhotoLibraryTwoTone as GalleryIcon,
  BrushTwoTone as CommissionIcon,
  PersonOutlineTwoTone as AboutMeIcon,
  ArticleTwoTone as LegalIcon
} from '@mui/icons-material'

export default function SiteCore () {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#AC751A',
        dark: '#8b5513',
        light: '#9c652c',
      },
      secondary: {
        main: '#feed61',
      },
      background: {
        paper: '#b6d1a9',
        default: '#acddc2',
      },
      // Custom Colors
      darkPrimary: {
        main: '#8b5513',
      },
      custom: {
        onPrimary: {
          title: '#ffffff',
          subtitle: '#e8d14b',
          subtitleHighlight: '#feed61',
          icon: '#ffffff',
          notification: '#e09b4c'
        },
        images: {
          character: '#000000',
          plant: '#8ba35d',
          potLight: '#806858',
          potDark: '634a3a',
        },
        pastels: {
          red: '#efb4a5',
          orange: '#efbd78',
          yellow: '#dcca64',
          green: '#afe163',
          cyan: '#77f29f',
          blue: '#89dbec',
          purple: '#b8c3ec',
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container disableGutters={true} maxWidth={false}>
        <TitleBar title="Sunny Hanna" subTitle="" titleColor="custom.onPrimary.title" subTitleColor="custom.onPrimary.subtitle"/>
        <Navigation>
          <LandingPage label="Welcome" icon={<CottageIcon/>}/>
          <GalleryPage label="Gallery" icon={<GalleryIcon/>} enableMenu={false}/>
          <CommissionPage label="Commissions" icon={<CommissionIcon/>}/>
          <AboutMePage label="About Me" icon={<AboutMeIcon/>}/>
          <LegalPage label="TOS" icon={<LegalIcon/>}/>
        </Navigation>
      </Container>
    </ThemeProvider>
  )
}
