import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
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