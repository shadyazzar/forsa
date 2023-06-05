
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View , ScrollView ,
  SafeAreaView,} from 'react-native';

export default function OffersApi() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)

 const url = "https://forsa-staging.bit68.com/api/v1/stores/get_offers/"

 useEffect(()=>{
   fetch(url)
   .then(response => response.json())
   .then((json)=>setData(json))
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])
  return (
    <SafeAreaView>
    <ScrollView >
    <View style={styles.container}>
      {
        loading ? <Text>Loading ...</Text>:
        data.results.map((post)=>(
          <ScrollView horizontal  key={post.id}>
          <View style={[post.description]} >
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.brand}</Text>
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.sector}</Text>
        
          </View>
          </ScrollView>
        ))
      }
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
