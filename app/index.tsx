import { Text, View,ScrollView} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView 
    className="bg-primary h-full"
    >
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full justify-center items-center h-full px-4">

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
