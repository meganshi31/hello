import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'

import { Card } from 'react-native-paper'


export default function TeacherHome() {
    return (
        // <ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background.png')} >
         <View style={styles.background}>
                 <Image source={require('../assets/about.jpg')}
                 style={{height:50,width:50,borderRadius:360,marginTop:50, marginLeft:10}}
                 />
                 <Text style={{marginLeft:70,fontSize:20,fontWeight:'bold',marginTop:-37}}>Teacher Home</Text>
                 <Text style={{marginTop:50,marginLeft:10,fontWeight:'bold'}}>Important Notification</Text>
                 <ScrollView horizontal={true}>
                        <View style={styles.Cardinit}>
                        <Text style={{marginTop:2 , borderBottomWidth:1,width:180,textAlign:'center',color:'black'}}>Admission Notification</Text>
                        <TouchableOpacity>
                        <Text style={{marginLeft:35,color:'#FEF2EE'}}> Click here to check </Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.Cardinit}>
                        <Text style={{marginTop:2 , borderBottomWidth:1,width:180,textAlign:'center',color:'black'}}>Result Notification</Text>
                        <TouchableOpacity> 
                        <Text style={{marginLeft:35,color:'#FEF2EE'}}> Click here to check </Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.Cardinit}>
                        <Text style={{marginTop:2 , borderBottomWidth:1,width:180,textAlign:'center'}}>Admission Notification</Text>
                        <TouchableOpacity>
                        <Text style={{marginLeft:35}}> Click here to check </Text>
                        </TouchableOpacity>
                        </View>
                 </ScrollView>
                 <Text style={{marginLeft:10,marginTop:30,fontWeight:'bold'}}>Notification :</Text>
          
                 <View style = {{flex:1}}>
           
           <View style = {styles.card1} >
                  
            <ScrollView style = {{flex:1}}>
            <View style = {styles.card2}>
                    <Text style={{marginLeft:10,marginTop:11,fontSize:16,color:'darkblue'}}>BTER First Year Exam Postponed</Text>             
                    <Text style={{marginLeft:-200,marginTop:60,color:'green'}}>Click here to know more</Text>
                    
                    <Image style={{height:90,width:90}}
                     source={require('../assets/mobile.png')}/>
                     
            </View>

            <View style = {styles.card2}>
            <Text style={{marginLeft:10,marginTop:11,fontSize:16,color:'darkblue'}}>BTER First Year Exam Postponed</Text>                
                    <Text style={{marginLeft:-200,marginTop:60,color:'green'}}>Click here to know more</Text>
                    <Image style={{height:90,width:90}}
                     source={require('../assets/mobile.png')}/>
            </View>

            <View style = {styles.card2}>
            <Text style={{marginLeft:10,marginTop:11,fontSize:16,color:'darkblue'}}>BTER First Year Exam Postponed</Text>                
                    <Text style={{marginLeft:-200,marginTop:60,color:'green'}}>Click here to know more</Text>
                    <Image style={{height:90,width:90}}
                     source={require('../assets/mobile.png')}/>
            </View>

            <View style = {styles.card2}>
            <Text style={{marginLeft:10,marginTop:11,fontSize:16,color:'darkblue'}}>BTER First Year Exam Postponed</Text>                
                    <Text style={{marginLeft:-200,marginTop:60,color:'green'}}>Click here to know more</Text>
                    <Image style={{height:90,width:90}}
                     source={require('../assets/mobile.png')}/>
            </View>

            <View style = {styles.card2}>
            <Text style={{marginLeft:10,marginTop:11,fontSize:16,color:'darkblue'}}>BTER First Year Exam Postponed</Text>                
                    <Text style={{marginLeft:-200,marginTop:60,color:'green'}}>Click here to know more</Text>
                    <Image style={{height:90,width:90}}
                     source={require('../assets/mobile.png')}/>
            </View>

            </ScrollView>
           
           </View>
            </View>         
               

     </View>
      
      
    )
}

const styles = StyleSheet.create({
 Cardinit:{
                borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        height:50,
        width:180,
        borderRadius:20,
        backgroundColor:'#909DD1',
        marginLeft:10,
        marginTop:10,
        },

        card1:{
               
        flexDirection:'column',
        justifyContent:'space-between',
         marginTop:8,
        
         
        height:500,
        width:400,
        
        backgroundColor:'white',
        // alignContent:'center',
        // alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
        },

        card2:{
                borderRadius:15,
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:10,
               marginLeft:10,
               
                height:100,
                width:342,
               
                backgroundColor:'white',
                // alignContent:'center',
                // alignItems:'center',
                elevation:3,
                shadowOffset:{width:100,height:100},
                shadowColor:'#000',
                shadowOpacity:0.5,
                shadowRadius:2,
                fontSize:19,
        }
    

})
