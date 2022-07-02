import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import assets from '../constants/assets'


const PrimaryButton = ({fontSize, handlePress, Text, minWidth}) => {
  return (
    <TouchableOpacity style={{borderColor:'red' , 
    borderRadius: 25,
    minWidth: minWidth,
    padding: 12,

    }}
    onPress={handlePress}
    >
        <Text
        style={{
            fontSize: fontSize,
            color: 'red',
            textAlign: 'center'
        }}
        >
            Delete
        </Text>
    </TouchableOpacity>
  )
}
  


const secondaryButton = () => {
    return (
        <View>
            <Text>Cancel</Text>
        </View>
    )
}

const IconButton = ({imgUrl, handlePress}) => {
    return(
         <TouchableOpacity style={{width: 40, height: 40, position: 'absolute',
    borderRadius: 24, alignItems: 'center', justifyContent: 'center'

    }}
    onPress={handlePress}
    >
        <Image
        source={assets.heart}
        resizeMode="contain"
        style={{width: 30, height: 30}}
        />
    </TouchableOpacity>
    )
}

export {IconButton, PrimaryButton, secondaryButton}