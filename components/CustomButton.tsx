import { isLoading } from 'expo-font'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
 
interface ButtonProps{
    title:string
    handlePress:any,
    containerStyles:string,
    isLoading:any
}

const CustomButton = ( {title,handlePress,containerStyles}:ButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}                 
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className="text-primary  font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  )
}
  
export default CustomButton

const styles = StyleSheet.create({})