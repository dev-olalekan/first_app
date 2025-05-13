import { StyleSheet, Text, useColorScheme, View } from 'react-native'
// import React from 'react'
import { Stack } from 'expo-router'
import  {Colors } from '../constant/Color'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
     
    // to access the color scheme created in constant/color.js
    // then the dark or light can be switched in app.json
    const colorscheme = useColorScheme()
    const theme = Colors[colorscheme] ?? Colors.light


  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
       headerTintColor: theme.title
      }}>
        <Stack.Screen name='index' options={{title: 'Home',  headerTitleAlign: 'center' }}/>
        <Stack.Screen name='about' options={{title: 'About ',  headerTitleAlign: 'center' }}/>
        <Stack.Screen name='contact' options={{title: 'Contact u',  headerTitleAlign: 'center' }}/>
      </Stack>
      </>
  )
}

export default RootLayout 

const styles = StyleSheet.create({})