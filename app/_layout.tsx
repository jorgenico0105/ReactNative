import { StyleSheet, Text, View } from 'react-native'
import {SplashScreen, Stack } from 'expo-router'//renderiza el chldrem
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
const _layout = () => { 
  SplashScreen.preventAutoHideAsync()
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  useEffect(()=>{
    if(error){
      console.log(error);
    };
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded])
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='(auth)' options={{headerShown:false}} />
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />
      
    </Stack>

  )
}

export default _layout

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})