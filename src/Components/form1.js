import React, { Component } from 'react';

import { TextInput, View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base'

export default class FormClassComponent extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            age:'',
            phone:'',
            data: [],

        }
    }
    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json.movies });
          })
          .catch((error) => console.error(error))
          
      }
    
    submit(){
        // console.warn('hello',this.state)
    }
  render() {
    const data= this.state.data.map((item)=>{
        console.warn(item.title)
    })
    return (
        <View style={{ margin: 10 }}>



        <Card >
            <CardItem >
                <Body >

                    <TextInput
                        style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                        placeholder="userName"
                        onChangeText={(text)=>this.setState({name:text})}
                    />
                    
                    <TextInput
                        style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                        placeholder="Age"
                        onChangeText={(text)=>this.setState({age:text})}
                    />
                    <TextInput
                        style={{ color: 'red', borderWidth: 1, borderColor: 'black', borderRadius: 5, height: 60, width: '100%' }}
                        placeholder="Phone"
                        onChangeText={(text)=>this.setState({Phone:text})}
                    />
                    
                </Body>
            </CardItem>
            <CardItem >
                <Body >
                <TouchableOpacity 
                style={{marginTop:10,padding:5,alignSelf:'center'}}
                onPress={()=>this.getMoviesFromApi()}
                >
                        <Text>
                        Submit
                        </Text>
                    </TouchableOpacity>
                </Body>
            </CardItem>
        </Card>


    </View>
    );
  }
}
