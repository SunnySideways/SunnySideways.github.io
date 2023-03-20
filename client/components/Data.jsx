import Axios from 'axios'
import React from 'react'

export default function Data(props) {

    const {targetFile, setData} = props

    // Retrieves the latest data and updates state
    const updateData = () => {
      Axios.get(targetFile)
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          alert('Failed to retrieve data.')
          console.error('Failed to retrieve data.')
          console.error(error)
        })
    }
  
    // side-effects, [] empty array means run once after first render
    React.useEffect(() => {
      updateData()
    }, [])

    return ( <React.Fragment></React.Fragment> )
}