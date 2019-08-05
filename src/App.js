import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Card } from "./components/common";

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
      <Card>
        <Text>Auth app!!</Text>
    </Card>
      </View>
    );
  }
}

export default App;
