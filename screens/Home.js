import { View, Text, Image, SafeAreaView, FlatList, Alert, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeHeader from '../components/HomeHeader'
import Card from '../components/Card'


const Home = () => {

    //State decalration for stori the api data
    const [data1, setData1] = useState([])
    const [token, setToken] = useState()
    const [finalData, setFinalData] = useState(data1)
   

      useEffect(() => {
        getAPIData()
    }, [])
    
   //Fetaching Data from the API
    const getAPIData = async () => await fetch(
        'http://message-list.appspot.com/messages?pageToken=' + token
    )
    .then((res) => res.json())
    .then((data) => {
      
        setData1([...data1,...data.messages])
        setFinalData([...data1,...data.messages])
        setToken(data.pageToken)
    })
    .catch((error) => {
        console.error(error);});
  
  const handleDelete = (id) => {
    const hdFilteredData = finalData.filter(item => item.id !== id);
    setFinalData(hdFilteredData);
  }

  const RenderItem = ({item, id}) => {

          let finalYear = `${item.updated}`
          finalYear = finalYear.slice(0,4)
          let currentYear = new Date().getFullYear();
          let final = parseInt(`${finalYear}`)
          final =  currentYear - final
          
          let imagUrl = `https://message-list.appspot.com`

  
          return(
            <View>
                <Card profileImage={{uri: `${imagUrl}${item.author.photoUrl}`}} author={item.author.name} time={final} data={item} Press={() => handleDelete(id)} />
            </View>
        )

      
  }
  
  const handleSearch = (value) => {
    if(!value.length) setFinalData(data1);

    const filteredData = data1.filter((item) => item.author.name.toLowerCase().includes(value.toLowerCase()))

    if(filteredData.length){
      setFinalData(filteredData)
    }
    else{
      setFinalData(data1)
    }
  }

  

    
  return (
    <SafeAreaView style={{flex: 1}}>
       <View style={styles.centeredView}>
    </View>
    <View>
      <FlatList
      data={finalData}
      onEndReached={getAPIData}
      onEndReachedThreshold={1}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <RenderItem item={item} id={item.id} />}
      ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}

      />
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 200,
    width: 300,
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});

export default Home