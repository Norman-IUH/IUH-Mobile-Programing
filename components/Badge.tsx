import {View, Text , StyleSheet, Image} from 'react-native'


export default function Badge(){
    return(
        <View style={style.container}>
            <View style={style.Header}>
                <Text>Bagde</Text>
            </View>
            <View style={style.Center}>
                <Image 
                source={{uri:"https://picsum.photos/id/237/200/300"}}
                style={{
                    width:"100%",
                    height:"100%"
                }}/>
                <Text style ={style.Badge}>-20%</Text>
            </View> 
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },
    Header:{
        alignItems:"center",
        justifyContent:"center",
        height:50
    },
    Center:{
        borderRadius:2,
        backgroundColor:"gray",
        flex:1,
        position:"relative",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:2,
        borderColor:"blue"
    },
    Badge:{
        position:"absolute",
        top:6,
        left:6,
        backgroundColor:"red",
        borderWidth:2,
        borderRadius:2,
        padding:20
    },
})