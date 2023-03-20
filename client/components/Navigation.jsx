import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Tabs, Tab, Toolbar } from '@mui/material'

const inactiveTabStyle = { color: 'custom.onPrimary.subtitle'}
export default function Navigation (props) {

  const {children} = props
  const tabs = []
  const [currentTab, setCurrentTab] = React.useState(0)

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  children.forEach(
    function(element, index)
    {
      tabs.push( <Tab key={index} value={index} label={element.props.label} icon={element.props.icon} iconPosition="top" sx={inactiveTabStyle}/> )
    }
  )


  return (
  <React.Fragment>
  <AppBar position='sticky' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Tabs value={currentTab} onChange={handleChange} textColor="secondary" indicatorColor='secondary'>
        {tabs}
      </Tabs>
    </Toolbar>
  </AppBar>
  {children[currentTab]}
  </React.Fragment>)
}