import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false
        }
    }
    _onHideUnderlay = () => {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay = () => {
        this.setState({ pressStatus: true });
    }
    onChange = () => {

        console.warn(this.props.name)
    }
    render() {

        return (
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={this.state.pressStatus ? styles.buttonPress : styles.button}
                    onPress={() => this.onChange()}
                    onHideUnderlay={() => this._onHideUnderlay()}
                    onShowUnderlay={() => this._onShowUnderlay()}
                >
                    <Text style={this.state.pressStatus ? styles.welcomePress: styles.welcome}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', margin: 30 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Greeting name='1' />
                    <Greeting name='2' />
                    <Greeting name='3' />
                    <Greeting name='4' />
                    <Greeting name='5' />
                </View>
                <View style={{ flexDirection: 'row', top: 30 }}>
                    <Greeting name='5' />
                    <Greeting name='6' />
                    <Greeting name='7' />
                    <Greeting name='8' />
                </View>
                <View style={{ flexDirection: 'row', top: 60 }}>
                    <Greeting name='9' />
                    <Greeting name='10' />
                    <Greeting name='11' />
                    <Greeting name='12' />
                    <Greeting name='13' />
                </View>
                <View style={{ flexDirection: 'row', top: 90 }}>
                    <Greeting name='14' />
                    <Greeting name='15' />
                    <Greeting name='16' />
                    <Greeting name='17' />
                </View>
                <View style={{ flexDirection: 'row', top: 120 }}>
                    <Greeting name='18' />
                    <Greeting name='19' />
                    <Greeting name='20' />
                    <Greeting name='21' />
                    <Greeting name='22' />
                </View>
                <View style={{ flexDirection: 'row', top: 150 }}>
                    <Greeting name='23' />
                    <Greeting name='24' />
                    <Greeting name='25' />
                    <Greeting name='26' />
                </View>
                <View style={{ flexDirection: 'row', top: 180 }}>
                    <Greeting name='27' />
                    <Greeting name='28' />
                    <Greeting name='29' />
                    <Greeting name='30' />
                    <Greeting name='31' />
                </View>
                <View style={{ flexDirection: 'row', top: 200 }}>
                    <Greeting name='32' />
                    <Greeting name='33' />
                    <Greeting name='34' />
                    <Greeting name='35' />
                </View>
                <View style={{ flexDirection: 'row', top: 230 }}>
                    <Greeting name='36' />
                    <Greeting name='37' />
                    <Greeting name='38' />
                    <Greeting name='39' />
                    <Greeting name='40' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    button: {

        width: 70,

    },
    buttonPress: {
        backgroundColor: 'yellow', width: 70,
    },
    WidthSty: {
        width: 70,
    },
    welcome: {
        fontSize: 20,
        
        },
        welcomePress: {
        fontSize: 20,
        
        backgroundColor: 'pink'
        },
});