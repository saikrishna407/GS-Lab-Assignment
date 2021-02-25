import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';



const One=()=>{
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'red',}}>
                <Text>1</Text>
            </TouchableOpacity>
        </View>
    )
}
const Two=()=>{
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'red',}}>
                <Text>2</Text>
            </TouchableOpacity>
        </View>
    )
}

export {One,Two};