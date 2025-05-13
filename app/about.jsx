import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import  {Colors } from '../constant/Color'

const About = () => {

  const colorscheme = useColorScheme()
      const theme = Colors[colorscheme] ?? Colors.light


  return (
    // the background is change to dark so it will be dark in color.js also
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <Text style={styles.title}>this is about page</Text>

      <Link href='/' style={styles.link}>back home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
      },
      link: {
        marginVertical: 10,
        borderBottomWidth: 1,
      }
})