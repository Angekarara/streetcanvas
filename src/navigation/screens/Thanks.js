import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Thanks = () => {
  return (
    <View style={styles.container}>
        <View style={styles.image}>
            <Text style={styles.Thank}>Thank you</Text>
            <Image 
                source={require("../../../assets/group.png")}
                style={{width: 50, height: 50}}
             />
        </View>
        <Text style={styles.text}>
        A big thank you for your generous donation! 
        Your support means a lot to us. We'll be in touch shortly to learn more about you and 
        share how we're making a difference together.
        </Text>
    </View>
  )
}

export default Thanks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        color: '#fff'
    },
    image:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 80
    },
    Thank:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        color: '#fff'
    }


})