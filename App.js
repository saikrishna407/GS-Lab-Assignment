import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './src/nav';
import ButtonExample from './src/native_Base';
import UserInfo from './src/Components/form';
import FormClassComponent from './src/Components/form1';
import Counter from './src/Components/inc_dec';
import FetchExample from './src/Components/fetch';
import PostData from './src/Components/post_Data';
import PostData1 from './src/Components/post_data1';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="FetchData"
        onPress={() => navigation.navigate('FetchExample1')}
      />
      <Button
        title="PsotExample1"
        onPress={() => navigation.navigate('PostDat')}
      /><Button
      title="PsotExample2"
      onPress={() => navigation.navigate('PostDa')}
    />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Buttons1" component={ButtonExample} />
        <Stack.Screen name="PostDat" component={PostData} />
        <Stack.Screen name="PostDa" component={PostData1} />

        <Stack.Screen name="Counter1" component={Counter} />
        <Stack.Screen name="FetchExample1" component={FetchExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
