import React, { Component } from 'react';

import { View,StyleSheet, Text,TouchableOpacity } from 'react-native';

export default class Temp extends Component{
    constructor(props){
        super(props);
        this.state={
            color: true,
            name:[1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
        }
    }
    
    onChange = () => {
        this.setState({ name: this.state.name });
        console.warn(this.state.name)
     }
render(){
    const sai = this.state.name && this.state.name.map((item) => {
        return (
            <TouchableOpacity style={{width:60,backgroundColor: this.state.color } } 
            onPress={()=>this.onChange()}
            >
                <Text  style={{fontSize:18,fontWeight:'400',}} > {item}</Text>

            </TouchableOpacity>
        );
    });
    return(
        <View style={{width:370,height:550,borderWidth:1,margin:30,}}>
           <View style={{alignSelf:'center',}}>
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30}}>
           <Text>{sai.slice(0,5)}</Text>
           </View> 
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-30,left:30}}>
           <Text>{sai.slice(5,9)}</Text>
           </View>
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-60,left:0}}>
           <Text>{sai.slice(9,14)}</Text>
           </View> 
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-90,left:30}}>
           <Text>{sai.slice(14,18)}</Text>
           </View>
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-120,left:0}}>
           <Text>{sai.slice(18,23)}</Text>
           </View> 
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-150,left:30}}>
           <Text>{sai.slice(23,27)}</Text>
           </View>
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-180,left:0}}>
           <Text>{sai.slice(27,32)}</Text>
           </View> 
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-210,left:30}}>
           <Text>{sai.slice(32,36)}</Text>
           </View>
           <View style={{flexDirection:'row',margin:5,justifyContent:'space-between',margin:30,top:-240,left:0}}>
           <Text>{sai.slice(36,41)}</Text>
           </View> 

           </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    
    widthS:{
        width:60
    }
  });