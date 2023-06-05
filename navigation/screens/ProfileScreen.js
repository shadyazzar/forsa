import { Text,StyleSheet, View,Image } from 'react-native';
import Translator from '../../localizations'
export default function ProfileScreen() {
    return (
      <View style={styles.container}>
         <View style={styles.bar}>
            <Text style={styles.profiles} >Profile</Text> 
         </View >
        <View style={styles.container2}>
       
        <Image
                   source={require('../../assets/shady.png')}
                   style={styles.shady}
                />
         <Text style={{fontSize :24 ,fontWeight: 'bold' }}>Shady Samir</Text>        
                </View>
        <View style= {{justifyContent: 'center',
      alignItems: 'center', flex :1  }}> 
          <Text style= {{fontSize : 30 }}>MY First React native APP</Text>
        </View>
        <View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    container2 :{
      flexDirection: 'row',
      top: 70,
      gap: 30,
    },
    bar: {
      borderRadius: 0,height: 150,width: "100%",
      backgroundColor: '#072040',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
    },
    shady: {
      marginLeft: 30,
      width: 80,
      height: 80,
      flexDirection: 'column',
      
    },
    profiles:{
      top: 90,
      left:147,
      justifyContent: 'center',
      alignItems: 'center',
      color : 'white' ,
      fontSize : 40,
      fontWeight: 'bold'
    },
  
    

});