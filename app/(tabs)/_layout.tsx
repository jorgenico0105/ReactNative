import { StyleSheet, Text, View,Image } from 'react-native'
import { Tabs} from 'expo-router'
import {icons} from "../../constants"  
const TabsLayout = () => {
   interface TabIconProps{
    icon:any,
    color:any,
    name:any,
    focused:any
   }

  const TabIcon =({icon,color,name, focused}:TabIconProps)=>{
    return (
      <View className=" flex text-center items-center mt-1 p-1 justify-center gap-1"> 
        <Image
        source= {icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
        />
        <Text  className={`${focused ? "font-semibold text-[#FFA001]"  : "font-pregular text-white" } text-xs `} >{name}</Text>
      </View>
    )
  }
  return (
    <Tabs 
    screenOptions={  {
      tabBarShowLabel:false,
      tabBarActiveTintColor:"#FFA001",
      tabBarInactiveTintColor:"CDCDE0",
      tabBarStyle:{
        backgroundColor:"#161622",
        borderTopWidth:1,
        borderTopColor:"#232533",
        height:84
      }
    }}
    >
                <Tabs.Screen 
      name='home'
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.home}
          color={color}
          name="Home"
          focused={focused}
          />
        )
      }}
      />
      <Tabs.Screen 
      name='bookmarks'
      options={{
        title:"BookMark",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.bookmark}
          color={color}
          name="Book"
          focused={focused}
          />
        )
      }}
      />
          <Tabs.Screen 
      name='create'
      options={{
        title:"Create",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.plus}
          color={color}
          name="Create"
          focused={focused}
          />
        )
      }}
      />
          <Tabs.Screen 
      name='profile'
      options={{
        title:"Profile",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.profile}
          color={color}
          name="Profile"
          focused={focused}
          />
        )
      }}
      />

    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({}) 