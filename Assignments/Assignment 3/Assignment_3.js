import { StyleSheet, Text, View } from 'react-native';
//import 'react-native-gesture-handler';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Nok from './Nok';
import SignupScreen from './SignupScreen';

export default function Assignment_3(){
   const Stack = createNativeStackNavigator();
  return(
<View style={styles.container}> 
     <NavigationContainer>
   <Stack.Navigator initialRouteName='Login'>
       <Stack.Screen name='Login' component={LoginScreen}/>

      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Signup' component={SignupScreen}/>
    
     </Stack.Navigator>
     </NavigationContainer>
    
   
    </View>

  )
}



const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  
}

})