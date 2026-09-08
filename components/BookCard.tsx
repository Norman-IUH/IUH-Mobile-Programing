import { View, Text, StyleSheet,Pressable } from "react-native";


export default function BookCard(){
return(
  <View style={style.container}>
    <View style={style.leftContainer}>
      <Text>anh bia</Text>
    </View>
    <View style={style.rightContainer}>
      <View>
      <Text>Ten sach</Text>
      <Text>Ten tac gia</Text>
      </View>
      <Text>gia</Text>
    </View>
  </View>
)
}
const style=StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  rightContainer:{
    flex:1,
    alignItems:'flex-start',
    backgroundColor:'green'
  },
  leftContainer:{
    width:80,
    height:110,
    borderRadius:6,
    backgroundColor:'gray'
  }

})