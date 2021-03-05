import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class PostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      postId: null
    };
  }

  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
}
  render() {
    const { postId } = this.state;
   
    return (
      <View style={{ flex: 1, padding: 24 }}>
       <Text>
       {postId}
       </Text>
      </View>
    );
  }
};
