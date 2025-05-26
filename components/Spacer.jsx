import { View } from 'react-native'
import React from 'react'


// those are the value by default
const Spacer = ({width = "100%", height = 40}) => {
  return (
    <View style= {{width, height}} />


  )
}

export default Spacer

