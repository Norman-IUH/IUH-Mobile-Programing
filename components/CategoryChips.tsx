import { View,Text,StyleSheet } from "react-native";


export default function CategoryChips(){
    return(
        <View style={style.container}>
            <View style={style.chipscontainer}>
                <Text>Van hoc</Text>
            </View>
            <View style={style.chipscontainer}>
                <Text>kinh te</Text>
            </View>
            <View style={style.chipscontainer}>
                <Text>Thieu nhi</Text>
            </View>
            <View style={style.chipscontainer}>    
                <Text>truyen tranh</Text>
            </View>
            <View style={style.chipscontainer}>
                <Text>Ngoai Ngu</Text>
            </View>
            <View style={style.chipscontainer}>
                <Text>Lich su</Text>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:8,
        width:300,
        justifyContent:"center"
    },
    chipscontainer:{
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:20,
        borderWidth:2
    }
})