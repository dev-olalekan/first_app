import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Dinhospics from '../assets/dinho.jpg'

const Home = () => {
  return (
    <View style={styles.container}> 

      <Image source={Dinhospics} style={styles.img}/>

      <Text style={styles.title}>home lab tech</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>Home for all more</Text>

      <View>
        <Text style={styles.card}>barcelona</Text>
      </View>

      {/* <button>hello</button> */}

    </View>

    
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
  },
  img: {
    marginVertical: 20,
  }
})