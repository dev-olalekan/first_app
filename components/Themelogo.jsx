import { Image, useColorScheme } from 'react-native'
import React from 'react'

// images
import  Darklogo from '../assets/neymar.jpg'
import  Lightlogo from '../assets/dinho.jpg'

const Themelogo = ({...props}) => {
    const colorScheme = useColorScheme()
      const logo = colorScheme === 'dark' ? Darklogo : Lightlogo
  return (
    <Image source={logo}{...props} />
  )
}

export default Themelogo