import { View, useColorScheme } from 'react-native'
import React from 'react'
import  {Colors } from '../constant/Color'

const themeview = ({style, ...props}) => {
    const colorscheme = useColorScheme()
    const theme = Colors[colorscheme] ?? Colors.light
  return (
    <View style={[{
        backgroundColor: theme.background
    }, style]} {...props}>
     
    </View>
  )
}

export default themeview