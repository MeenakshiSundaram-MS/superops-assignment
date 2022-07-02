import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { IconButton, PrimaryButton, secondaryButton } from './Button'
import {useNavigation} from '@react-navigation/native'
import assets from '../constants/assets'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({profileImage, author, time, data, Press, dataID}) => {
  const navigation = useNavigation()
   const [pressed, setPressed] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);

   const buttonPressHandler = () => {
    setPressed(!pressed);
  };
  let imagUrl = `https://message-list.appspot.com`

  
  
  return (
  
    <TouchableOpacity onPress={() => navigation.navigate("Details", {data, pressed: pressed})}>
          <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Delete this author?</Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Image
              source={{uri: `${imagUrl}${data.author.photoUrl}`}}
              resizeMode='contain'
              style={{height:74, width: 74, borderRadius: 100}}
              />
              <View style={{left: 30, marginTop: 10}}>
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>{data.author.name}</Text>
                <Text>{time} years ago</Text>
              </View>
              </View>
            <View style={{ flexDirection: 'row-reverse', marginTop: 20, marginLeft: 10}}>
              <TouchableOpacity
              style={{padding: 10, borderColor: 'red', borderRadius: 25, borderWidth: 3}}
              onPress={Press}
            >
              <Text style={{color: 'red'}}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 10, borderColor: 'white', borderRadius: 25, borderWidth: 3}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color: 'black', marginRight: 10}}>Cancel</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
        style={{width: 55, height: 55, borderRadius: 100}}
        source={profileImage}
        resizeMode='contain'
    
        />
      </View>
      <View style={{flexDirection: 'column'}}>
      <View style={styles.author}>
        <Text style={{fontSize: 12,
        fontWeight: "bold"}}>{author}</Text>
      </View>
      <View style={styles.time}>
        <Text style={{fontSize: 11,
        fontWeight: "bold"}}>{time} years ago</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>

    {/* Heart button */}

  <TouchableOpacity style={{width: 43, height: 43, position: 'absolute',
    borderRadius: 24, alignItems: 'center', justifyContent: 'center'

    }}
    onPress={buttonPressHandler}
    >
       {
      pressed ?  <Ionicons name= 'md-heart' size={33} color="red" /> : <Ionicons name='md-heart' size={33} color="#e6e6e6"/>
    }
    </TouchableOpacity>

    {/* Delete button */}

    <TouchableOpacity style={{borderColor:'red' , borderRadius: 20, minWidth: 60, padding: 8, borderWidth: 2, left: 50}} onPress={() => setModalVisible(!modalVisible)}>
    <Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'red',
            textAlign: 'center'
        }}>
            Delete
        </Text>
    </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Card;

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 15,
        borderWidth: 0.5,
        height: 100,
        width: '90%',
        marginVertical: 15,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    imageContainer:{
        left: 16,
        top: 20
    },
    author: {
        width: 200,
        left: 28,
        top: 30
    },
    time:{
        left: 28,
        top: 35
    },
    buttonContainer:{
      flexDirection: 'column',
      justifyContent: 'center',
      right: 28
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 250,
    width: 320,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
    borderColor: 'red',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})