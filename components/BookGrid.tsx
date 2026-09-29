import {View, Text, StyleSheet, Image} from 'react-native'


export default function BookGrid(){
    const books =[
        {id:1,title:"book 1", price:10},
        {id:2,title:"book 2", price:20},
        {id:3,title:"book 3", price:30},
        {id:4,title:"book 4", price:40},
    ]
    return(
        <View style ={style.container}>
            <View style={style.BookGrid}>
                {books.map((book)=>(
                     <View style={style.BookItem}>
                    <Image 
                    source={{uri:"https://picsum.photos/id/237/200/300"}}
                    style={{
                        width:"100%",
                        aspectRatio:3/4,
                    }}
                    />
                    <View style={style.BookItem}>
                    <Text>{book.title}</Text>
                    <Text>{book.price}</Text>
                    </View>
                   </View>
                ))}
               
               
            </View>
        </View>
    )
}
const style= StyleSheet.create({
    container:{
        flex:1
    },
    BookGrid:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },
    BookItem:{
        width:"48%",
        marginBottom:2,
    }
})