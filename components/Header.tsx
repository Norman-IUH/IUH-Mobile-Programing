import { View, Text, StyleSheet,Pressable } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header(){
  return(
    <View style={style.container}>
      <View>
        <Text>Bookstore</Text>
      </View>
      <View style={style.rightContainer}>
      <Pressable 
      onPress={()=>console.log('log search')}>
       <EvilIcons name="search" size={24} color="black" />
       </Pressable>
       <Pressable onPress={()=>console.log('log shop')}>
        <AntDesign name="shop" size={24} color="black" />
      </Pressable>
      </View>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'red',
    justifyContent:'space-between',
    alignItems:'center',
    padding:16,
    height:56,
    flex:1
  },
  rightContainer:{
    flexDirection:'row',
    gap:15,
    backgroundColor:"green"
  }
})