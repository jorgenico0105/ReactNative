import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import FormComponent from '@/components/FormComponent'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
const Signin = () => {
  const [form, setform] = useState({
    email:"",
    password:""
  })
  const [submiting, setsubmiting] = useState(false)
  const handleSubmit=()=>{

  }
  return (
    <SafeAreaView className="bg-primary h-[100vh] ">    
    <ScrollView>
      <View className="w-full justify-center h-[75vh] px-4 my-6">
        <Image 
        source={images.logo}
        resizeMode='contain'
        className="w-[115px] h-[35px]"
        / >
          <Text className="text-2xl text-white  font-semibold mt-10">Log In</Text>
          
          <FormComponent
          title="Email"
          value={form.email}
          handleChange={(e:any)=>setform({...form,
            email:e
          })}
          keyBoardTYpe='email-address'
          otherStyles='mt-7'
          ></FormComponent>
                    <FormComponent
          title="Password"
          value={form.password}
          handleChange={(e:any)=>setform({...form,
            password:e
          })}
          keyBoardTYpe='email-address'
          otherStyles='mt-7'
          ></FormComponent>
          <CustomButton
          title='Log in'
          handlePress={handleSubmit}
          containerStyles='mt-7'
          isLoading={submiting}
          ></CustomButton>
          <View  className=" pt-5 flex justify-center items-center gap-2 ">
             <Text className="text-lg text-gray-100">
              No tienes una cuenta?
             </Text>
             <Link 
             className='text-lg text-secondary-100'
             href="/sign-up"
             >Registrate!</Link>
          </View>
      </View>
    </ScrollView>
      <Text>Signin</Text>
    </SafeAreaView>
  )
} 

export default Signin

const styles = StyleSheet.create({})