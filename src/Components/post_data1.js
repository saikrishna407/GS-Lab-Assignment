import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

export default class PostData1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                email: this.state.email,
                passWord: this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json()
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }


    render() {

        return (
            <View style={{ paddingTop: 23 }}>
                <TextInput style={{
                    margin: 15,
                    height: 40,
                    borderColor: '#7a42f4',
                    borderWidth: 1
                }}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={{
                    margin: 15,
                    height: 40,
                    borderColor: '#7a42f4',
                    borderWidth: 1
                }}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TouchableOpacity
                    style={{
                        backgroundColor: '#7a42f4',
                        padding: 10,
                        margin: 15,
                        height: 40
                    }}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={{ color: 'white' }}> Submit </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

