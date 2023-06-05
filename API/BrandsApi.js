
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View , ScrollView ,
  SafeAreaView,} from 'react-native';

export default function BrandssApi() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)

 const url = "https://forsa-staging.bit68.com/api/v1/stores/get_sectors/"

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
          <ScrollView horizontal  key={post.value}>
          <View style={[post.description]} >
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.label}</Text>
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.slug}</Text>
            <Image style={{width:100,height:100}} source={{uri:post.image}} />
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
