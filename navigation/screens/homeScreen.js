import React, { Component } from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BrandssApi from '../../API/BrandsApi';
import OffersApi from '../../API/OffersApi';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
            <TouchableOpacity  style={[styles.logobutton, styles.center]}>
                <View>
                <Image
                   source={require('../../assets/logo.png')}
                   style={styles.logoimage}
                />
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.heartbutton, styles.center]}>
                <View>
                <Image
                   source={require('../../assets/heart.png')}
                   style={styles.heartimage}
                />
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.bellbutton, styles.center]}>
                <View>
                <Image
                   source={require('../../assets/bell.png')}
                   style={styles.bellimage}
                />
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity  style={[styles.searchbutton, styles.center]}>
                <View>
                <Image
                   source={require('../../assets/search.png')}
                   style={styles.searchimage}
                />
                </View>
                
            </TouchableOpacity>
            
        </View>
        <ScrollView >
            <BrandssApi/>
            
            </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    bar: {
      borderRadius: 0,height: 200,width: "100%",
      backgroundColor: '#072040',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
    },
    logobutton: {
        
        top: 90,
        border: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoimage: {
        width: 41,
        height: 70,
      },
      heartbutton: {
        
        top: 12,
        right:-110,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heartimage: {
        width: 33,
        height: 29,
      },
      bellbutton: {
        
        top: -16,
        right:-160,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bellimage: {
        width: 30,
        height: 29,
      },
      searchbutton: {
        
        top: -45,
        right:160,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      searchimage: {
        width: 29,
        height: 29,
      },
  });
  
export default HomeScreen;
