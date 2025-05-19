import { StyleSheet, useColorScheme, View} from 'react-native'
import React from 'react'
import { Colors } from '../constant/Color'

const Themecard = ({style, ...props}) =>  {
        const colorscheme = useColorScheme()
        const theme = Colors[colorscheme] ?? Colors.light


  return (
    <View style={[{ backgroundColor: themeview.uiBackground}, styles.card, style]} {...props} />
    
  
  )
}

export default Themecard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})