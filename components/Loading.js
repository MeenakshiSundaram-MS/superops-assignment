import { View, Text } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>Loading...</Text>
    </View>
  )
}

export default Loading