import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Dinhospics from '../assets/dinho.jpg'
import { Link } from 'expo-router'

// import themeview components
import Themeview from '../Components/Themeview'
import Themelogo from '../Components/Themelogo'

const Home = () => {
  return (
    <Themeview style={styles.container}> 

      {/* <Image source={Dinhospics} style={styles.img}/> */}
      <Themelogo  style={styles.img}/>

      <Text style={styles.title}>home lab tech</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>Home for all more</Text>

      <View>
        <Text style={styles.card}>barcelona</Text>
      </View>

      <Link href="/about" style={styles.link}>about</Link>
      <Link href="/contact" style={styles.link}>contact me</Link>

      {/* <button>hello</button> */}

    </Themeview>

    
  )
}

export default Home

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
  card: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    boxShadow: '2px 2px rgb(23, 3, 46)',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})