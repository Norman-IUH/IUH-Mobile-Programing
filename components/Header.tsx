import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Header(){
  return(
    <View style={style.container}>
      <View style={style.leftHeader}>
      <Text>icon</Text>
      </View>
      <View style={style.rightHeader}>
        <View style={{borderRadius:2, borderWidth:2}}>
        <Pressable onPress={()=>console.log("seach")}>seach </Pressable>
        </View>
        <View style={{borderRadius:2, borderWidth:2}}>
        <Pressable onPress={()=>console.log("cart")}> cart</Pressable>
        </View>     
      </View>
    </View>
  )
}
const style= StyleSheet.create({
  container:{
    
    justifyContent:"space-between",
    flexDirection:"row",
  },
  leftHeader:{
  justifyContent:"space-between"
  },
  rightHeader:{
    gap:10,
    flexDirection:"row"
  
  }
})