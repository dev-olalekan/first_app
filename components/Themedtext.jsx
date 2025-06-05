import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constant/Color'
import React from 'react'



const Themedtext = ({style, title = false, ...props}) => {
    const colorscheme = useColorScheme()
    const theme = Colors[colorscheme] ?? Colors.light

    const textColor = title ? theme.title : theme.text

  return (
    
      <Text style={[{color: textColor}, style]}
      {...props} />
   
  )
}

export default Themedtext