import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    
      <Stack screenOptions={{
        headerStyle: {backgroundColor: "#ddd",},
       headerTintColor: '#333'
      }}>
        <Stack.Screen name='index' options={{title: 'Home',  headerTitleAlign: 'center' }}/>
        <Stack.Screen name='about' options={{title: 'About ',  headerTitleAlign: 'center' }}/>
        <Stack.Screen name='contact' options={{title: 'Contact u',  headerTitleAlign: 'center' }}/>
      </Stack>
  )
}

export default RootLayout 

const styles = StyleSheet.create({})