import React from 'react'
import { View, Text, ImageBackground, TextInput , StyleSheet, ScrollView , Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
export default function Courses() {
    return (
       <ImageBackground  style = {{height:'100%',width:'100%'}} source = {require('../assets/deepsea.jpg')}>
            {/* <View style={styles.bg}> */}
          <Image style={{height:30,width:30,marginTop:40}}
          source={require('../assets/backarrow.png')} />
            <View style = {{flex:1}}>
           <View style = {styles.card}> 
           <EvilIcons name="search" size={24} color="black" />
             <TextInput style={{backgroundColor:'white',height:34,width:320,borderRadius:14}}
              placeholder = {'Search Here'}>
             </TextInput>
           </View>  
               <ScrollView horizontal = {true}  >
               <View style = {styles.button1}>
                  <Text style = {{color:'black',fontSize:18}}> Diploma </Text>
               </View>
          
               <View style = {styles.button2}>
                  <Text style = {{color:'black',fontSize:18}}> Post Diploma </Text>
               </View>

               <View style = {styles.button3}>
                  <Text style = {styles.text}> Certificate Courses </Text>
               </View>
               </ScrollView>
             
             <ScrollView>   
                <View style = {styles.Coursecard}> 
                <View style = {styles.imagecard}>
                <Image style = {{width:'90%',height:'90%',borderRadius:20}} source = {require('../assets/Civil.png')} />                        
                  </View>
                  <View style = {styles.textcard}>
                     <Text style = {styles.textcardfontTitle}> Civil Engeenering </Text>
                     <Text style = {styles.textcardfontSubtitle}>   Seats 60+(3) </Text>
                     <View style = {styles.buttoncard}> 
                      <Text style = {{color:'black',fontWeight:'bold',fontSize:15}} > Know More </Text>
                     </View>
                  </View>
                </View>

                <View style = {styles.Coursecard}> 
                <View style = {styles.imagecard}>
                        <Image style = {{width:'90%',height:'90%',borderRadius:20}} source = {require('../assets/computer.png')} /> 
                  </View>
                  <View style = {styles.textcard}>
                     <Text style = {styles.textcardfontTitle}>Computer Science Engeenering </Text>
                     <Text style = {styles.textcardfontSubtitle}>   Seats 60+(3) </Text>
                     <View style = {styles.buttoncard}> 
                      <Text style = {{color:'black',fontWeight:'bold',fontSize:15}} > Know More </Text>
                     </View>
                  </View>
                </View>

                <View style = {styles.Coursecard}> 
                  
                <View style = {styles.imagecard}>
                        <Image style = {{width:'90%',height:'90%',borderRadius:20}} source = {require('../assets/Electric.png')} /> 
                  </View>
                  <View style = {styles.textcard}>
                     <Text style = {styles.textcardfontTitle}> Electrical Engeenering </Text>
                     <Text style = {styles.textcardfontSubtitle}>   Seats 60+(3) </Text>
                     <View style = {styles.buttoncard}> 
                      <Text style = {{color:'black',fontWeight:'bold',fontSize:15}} > Know More </Text>
                     </View>
                  </View>

                </View>

                <View style = {styles.Coursecard}> 
                 
                <View style = {styles.imagecard}>
                        <Image style = {{width:'90%',height:'90%',borderRadius:20}} source = {require('../assets/Electronic.png')} /> 
                  </View>
                  <View style = {styles.textcard}>
                     <Text style = {styles.textcardfontTitle}> Electronics Engeenering </Text>
                     <Text style = {styles.textcardfontSubtitle}>   Seats 60+(3) </Text>
                     <View style = {styles.buttoncard}> 
                      <Text style = {{color:'black',fontWeight:'bold',fontSize:15}} > Know More </Text>
                     </View>
                  </View>

                </View>

                <View style = {styles.Coursecard}> 
                <View style = {styles.imagecard}>
                        <Image style = {{width:'90%',height:'90%',borderRadius:20}} source = {require('../assets/IT.png')} /> 
                  </View>
                  <View style = {styles.textcard}>
                     <Text style = {styles.textcardfontTitle}> IT Engeenering </Text>
                     <Text style = {styles.textcardfontSubtitle}>   Seats 60+(3) </Text>
                     <View style = {styles.buttoncard}> 
                      <Text style = {{color:'black',fontWeight:'bold',fontSize:15}} > Know More </Text>
                     </View>
                  </View>
                </View>
               
             </ScrollView>
            
         
           

        
               </View>
             {/* </View> */}
     </ImageBackground>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:19,
        marginLeft:10,
        marginRight:20,
        height:35,
        width:340,
       
        backgroundColor:'white',
        
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        // fontSize:15,
            
    },

    button1:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        paddingTop:3,
        height:35,
        width:100, 
        backgroundColor:'white',    
        // backgroundColor:'#35838F',
        marginBottom:60,
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
    
    button2:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:30,
        marginLeft:30,
        marginRight:20,
        paddingTop:3,
        height:35,
        width:150,     
        backgroundColor:'white',
        // backgroundColor:'#35838F',
        marginBottom:60,
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },


    button3:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:30,
        marginLeft:30,
        marginRight:20,
        height:35,
        width:200,     
        paddingTop:3,
        backgroundColor:'white',
        marginBottom:60,
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },

    Coursecard:{
        borderRadius:15,
        flexDirection:'row',
        
        marginTop:-5,
        marginLeft:20,
        marginRight:20,
        height:200,
        width:350,   
        shadowOffset:{width:100,height:100},
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },

    imagecard:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'flex-end',
        marginTop:-6,
         height:'100%',
         width:'50%',          
    },

    textcard:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'flex-start',
        marginLeft:-25,
         height:'100%',
         width:200,            
    },

    text:{
        fontSize:18,
        fontWeight:'normal',
        textAlign:'justify'
    },

    textcardfontTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:20,
        color:'white',
    },
   
    textcardfontSubtitle:{
        fontSize:15,
        fontWeight:'normal',
        marginTop:10,
        marginLeft:15,
        color:'#D8D8D8',
    },

    buttoncard:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'center',
        marginTop:35,
        marginLeft:40,
        marginRight:20,
        height:35,
        width:100,
        backgroundColor:'white',     
        // backgroundColor:'#0E829B',
        marginBottom:60,
      
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,

    },
    course:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
    },
    // bg:{
    //     backgroundColor:'#C9DFE2',
    //     height:'100%',
    //     width:'100%',
    // }

})
