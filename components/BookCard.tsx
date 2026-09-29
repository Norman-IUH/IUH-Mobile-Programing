import { View,Text, StyleSheet } from "react-native";


export default function BookCard(){
  return(
    <View style={style.container}>
      <View style={style.leftBook}>
      <Text>Image</Text>
      </View>

      <View style={style.rightBook}>
        <View>
          <Text numberOfLines={2} style={{borderRadius:2, borderWidth:2,marginBottom:3}}>Title</Text>
          <Text  style={{borderRadius:2, borderWidth:2}}>Name</Text>
        </View>
        <Text  style={{borderRadius:2, borderWidth:2}}>Price</Text>
      </View>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center"
    
  },
  leftBook:{
    height:110,
    width:80,
    borderRadius:2,
    borderWidth:2
    
  },
  rightBook:{
    height:100,
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between"
  }

})