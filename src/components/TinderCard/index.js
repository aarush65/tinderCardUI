import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Card = (props) =>{
    const {name, image, bio} = props.user;
    return(
        <View style ={styles.card}>
        <ImageBackground 
          source = {{uri: image}} 
            style={styles.image}>
                <View style = {styles.innerCard}>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.bio}>{bio}</Text>
              </View>
            </ImageBackground>     
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
      height: '100%',
      width: '100%',
      borderRadius: 10,
      overflow:'hidden',
      justifyContent:'flex-end'
    },
    card: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
    name: {
      fontSize:30,
      color: 'white',
      fontWeight: 'bold',
    },
    bio:{
      fontSize:18,
      color:'white',
      lineHeight:25
    },
    innerCard:{
      padding:10
    }
  });
  export default Card;
