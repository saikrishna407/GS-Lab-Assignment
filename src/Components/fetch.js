import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class FetchExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    // const { data, isLoading } = this.state;
    const data= this.state.data.map((item)=>{
        return(
            <View>
                <Text>{item.title}</Text>
            </View>
        );
    })
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {data}
      </View>
    );
  }
};