import Header from "./components/Header";
import BookCard from "./components/BookCard";
import CategoryChips from "./components/CategoryChips";
import {Text, View, StyleSheet} from 'react-native'
import BookGrid from "./components/BookGrid";
import Badge from "./components/Badge";
import FloatingCartButton from "./components/FloatingCartButton";

export default function app(){
  return(
 <View style ={{flex:1}}>
  <FloatingCartButton />
 </View>

)}