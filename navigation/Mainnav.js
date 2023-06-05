import { Text, View , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import RetailScreen from './screens/RetailScreen';
import OffersScreen from './screens/OffersScreen';
import ProfileScreen from './screens/ProfileScreen';





const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarPosition="bottom"
    screenOptions={{
      headerShown: false,
    }} >
      <Tab.Screen name="Home"  component={HomeScreen}  options={{
              tabBarIcon: ({ focused, color }) => (
                <Image
                  source={require("../assets/home.png")}
                  style={{ width: 24, height: 24, tintColor: color }}
                />
              ),
            }}/>
      <Tab.Screen name="Retail" component={RetailScreen}  options={{
              tabBarIcon: ({ focused, color }) => (
                <Image
                  source={require("../assets/retail.png")}
                  style={{ width: 24, height: 24, tintColor: color }}
                />
              ),
            }}/>
      <Tab.Screen name="Offers" component={OffersScreen} options={{
              tabBarIcon: ({ focused, color }) => (
                <Image
                  source={require("../assets/offers.png")}
                  style={{ width: 24, height: 24, tintColor: color }}
                />
              ),
            }} />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{
              tabBarIcon: ({ focused, color }) => (
                <Image
                  source={require("../assets/profile.png")}
                  style={{ width: 24, height: 24, tintColor: color }}
                />
              ),
            }}/>
    </Tab.Navigator>
  );
}

