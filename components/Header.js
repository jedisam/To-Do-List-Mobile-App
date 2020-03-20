import React from "react"
import { StyleSheet, View, Text } from "react-native"

const Header = (props)=>{
    return(
        <View style={styles.head}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        backgroundColor:"rgb(51, 35, 35)",
        height:60,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:"#f3f3f3",
        fontSize:28,
        fontWeight:"900",
        textTransform:"uppercase"
    }
})

export default Header