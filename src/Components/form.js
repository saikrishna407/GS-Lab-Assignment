import React, { Component,useState } from 'react';
import { TextInput, View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base'

const UserInfo = ({ navigation }) => {
    // const[name,setName]=useState("")
    // const[age,setAge]=useState("")
    // const[email,setEmail]=useState("")
    // const[phone,setPhone]=useState("")

    const data = [
        { id: 1, Name: 'sai1', Age: 27, phone: '77777777' },
        { id: 2, Name: 'sai2', Age: 28, phone: '88888888' },
        { id: 3, Name: 'sai3', Age: 29, phone: '99999999' },
        { id: 4, Name: 'sai4', Age: 30, phone: '000000000' }
    ]
    return (
        <View style={{ margin: 10 }}>



            <Card >
                <CardItem >
                    <Body >

                        <TextInput
                            style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                            placeholder="userName"

                        />
                        
                        <TextInput
                            style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                            placeholder="userName"

                        />
                        <TextInput
                            style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                            placeholder="userName"

                        />
                        
                    </Body>
                </CardItem>
                <CardItem >
                    <Body >
                    <TouchableOpacity style={{marginTop:10,padding:5,alignSelf:'center'}}>
                            <Text>
                            Submit
                            </Text>
                        </TouchableOpacity>
                    </Body>
                </CardItem>
            </Card>


        </View>
    )
}

const styles = StyleSheet.create({

    inputStyle: {
        margin: 5
    }
})

export default UserInfo;