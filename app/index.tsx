import { Text, View, ScrollView, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import {Redirect,router} from "expo-router"
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        <View className="w-full justify-start min-h-[85vh] items-center">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image   
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 w-[350px]">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With {"  "}
              <Text className="text-secondary-200">
                Ile Plus
              </Text>
            </Text>
            <Image 
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2  -right-[-100px]"
            resizeMode="container"
            />
          </View> 
          <Text className="text-gray-100 text-sm font-pregular text-center mt-9">
            Apliacion modelo y base en React Native para descubrir funcionalidades y construccion de interfaces  
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress= {()=>router.push("/sign-in")}
            containerStyles="w-[90%] mt-7"
            isLoading={false}
          />        
        </View>

      </ScrollView>
      <StatusBar 
      backgroundColor="#161622" 
      />                 
    </SafeAreaView>
  );
}
