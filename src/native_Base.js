import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';



function ButtonExample({ navigation }) {
    return (
        <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
  export default ButtonExample;