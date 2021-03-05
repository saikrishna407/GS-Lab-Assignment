import React, { Component } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
        //console.warn('Increment')
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
        //console.warn('Decremenet')
    }
    render() {
        return (
            <View style={{ margin: 20,flexDirection:'row' }}>
                <View >
                    <TouchableOpacity 
                    style={{height:20,width:50,backgroundColor:'yellow'}}
                    onPress={() => this.increment()}>
                        <Text style={{textAlign:'center'}}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:20,width:50,backgroundColor:'red'}}>
                    <Text style={{alignSelf:'center'}}>
                        {this.state.count}
                    </Text>
                </View>
                <View>
                <TouchableOpacity 
                    style={{height:20,width:50,backgroundColor:'yellow'}}
                    onPress={() => this.decrement()}>
                        <Text style={{textAlign:'center'}}>
                            -
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
