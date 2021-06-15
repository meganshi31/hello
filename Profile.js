import React from 'react'
import { View, Text, ImageBackground,StyleSheet, Image } from 'react-native'
import { Card , Avatar , Appbar } from 'react-native-paper'
import { color } from 'react-native-reanimated'

export default function Profile() {
    return (
        <View>
        <View style={styles.card}>

<Image style={{width:30,height:30,marginLeft:9,borderRadius:360,marginTop:50}} 
 source= {require('../assets/backarrow.png')} />
<Text style={{marginLeft:50,fontSize:20,fontWeight:'bold',marginTop:-28}}>Profile</Text>
<Image style={{width:110,height:110,borderRadius:360,marginLeft:120,marginTop:30}}
 source={require('../assets/Course.jpg')} />
 <Text style={{fontSize:18,marginLeft:110,marginTop:10}}>Ali Abbas Banna</Text>
 <Text style={{color:'#828282',marginLeft:110}}>aliabbas@gmail.com</Text>

</View>

<View style={styles.card1}>
<Text style={{marginTop:30,marginLeft:20,color:'black'}}> Name:   Ali Abbas</Text>
<Text style={{marginTop:30,marginLeft:20}}> Email:   aliabbas@gmail.com</Text>
<Text style={{marginTop:30,marginLeft:20}}> MobileNo:   1234567890</Text>
<Text style={{marginTop:30,marginLeft:20}}> Department:  Computer Science</Text>




</View>
</View>

    )
}

const styles = StyleSheet.create({
 
    card:{
        borderRadius:30,
        // flexDirection:'row',
       
        height:300,
        width:360,
        // marginLeft:10,
        // marginRight:10,
        backgroundColor:'#E8F4F6',
       
        // alignContent:'center',
        // alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },


    card1:{
        borderRadius:30,
        // flexDirection:'row',
       marginTop:40,     
        height:380,
        width:300,
        marginLeft:26,
        // marginRight:10,
        backgroundColor:'#F2F8F9',
       
        alignContent:'center',
        // alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
    }
            
   
})
