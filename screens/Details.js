import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Platform } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import Home from './Home';


const DetailsHeader = ({navigation}) => {
  const route = useRoute()
  
  const buttonValue = route.params.pressed

  const backButton = () => {
    return navigation.navigate(Home)
  }

  const buttonPressHandler = () => {
    Alert.alert("You can only mark/unmark your favourite on Homescreen")
  }


  return (
    <View style={{left: 5, top: Platform.OS === 'android' ? 55 : 10, width: "100%" }}>
      <View style={{ flexDirection:'row' , left: 25}} >
        <TouchableOpacity style={{ width: 43, height: 43, position: 'absolute'}} onPress={backButton}>
        <Ionicons name='md-arrow-back' size={28} color="red" />
        </TouchableOpacity>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          left: 40,
          top: Platform.OS === 'android'? -1 : 2
        }} >Details</Text>
        <TouchableOpacity style={{width: 43, height: 43, left: 300, position: 'absolute'}} onPress={buttonPressHandler}>
       {
      buttonValue ?  <Ionicons name= 'md-heart' size={30} color="red" /> : <Ionicons name='md-heart' size={30} color="#e6e6e6"/>
    }
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row-reverse', right: 25}}>
        
      </View>
      
      
    </View>
  )
}

const Details = ({route, navigation}) => {
  const {data} = route.params;
  let imagUrl = `https://message-list.appspot.com`
  return(
    <SafeAreaView>
    <View>
      <DetailsHeader data={data} navigation={navigation}/>
      <View style={styles.contentContainer}>
        <View style={{top: 120}}>
          <Image
          source={{uri: `${imagUrl}${data.author.photoUrl}`}}
          style={{width: 250, height: 250, borderRadius: 250}}
          />
        </View>
        <View style={{top: 160}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold'}} >{data.author.name}</Text>
        </View>
        <View style={{ top: 190, width: "90%", alignItems: 'center' }}>
          <Text style={{fontSize: 14, fontWeight: '700', textAlign:'center'}} >{data.content}</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
    contentContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'

    }
})