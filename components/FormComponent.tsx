import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

 interface FormProps {
    title:string,
    value:string,
    handleChange:any
    otherStyles:string,
    keyBoardTYpe:string
 }

const FormComponent = ({title,value,handleChange,otherStyles,keyBoardTYpe,...props}:FormProps) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center"> 
      <TextInput
      className="flex-1 w-full text-white font-semibold text-base"
      value={value}
      placeholder="Fill your info"
      placeholderTextColor="#7b7b8b"
      onChangeText={handleChange}
      secureTextEntry={title === "Password" && !showPassword}
      />
      
      </View>
    </View>
  )
}

export default FormComponent

const styles = StyleSheet.create({})