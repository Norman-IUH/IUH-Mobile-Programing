import { View, Text, StyleSheet,Pressable } from "react-native";
import Header from "./components/Header";
import BookCard from "./components/BookCard";


export default function App(){
return(
  <View style={styles.container}>
  <BookCard />
  </View>
)}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})