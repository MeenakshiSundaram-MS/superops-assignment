import { View, Text, TextInput, StyleSheet, Image, Platform } from 'react-native'
import React from 'react'
import assets from '../constants/assets'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeHeader = ({onSearch}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.headerMainContainer}>
        <View style={styles.headerInnerContainer}>
            
            <TextInput
            placeholder='Search...'
            style={styles.textInput}
            onChangeText={onSearch}
            />
            <Ionicons
          name='md-search'
          size={28}
          color="black"
        />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
    Container: {
        marginTop: Platform.OS === 'android' ? 35 : 5,
        padding: 14,
    },
    headerMainContainer: {
        marginTop: 0,
    },
    headerInnerContainer:{
        width: '100%',
        borderRadius: 45,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 14,
    
        
    },
    searchIcon:{
        width: 20, 
        height: 20, 
        marginRight: 8,
    },
    textInput:{
        flex: 1,
        fontWeight: "bold",
        color: "black"
    }
})

