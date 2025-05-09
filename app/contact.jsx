import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>08113269195</Text>

      <Link href='/' style={styles.link}>back home</Link>
    </View>
  )
}

export default Contact

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