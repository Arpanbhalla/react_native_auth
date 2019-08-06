import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm"

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBa4QBHvIrsr33lIhkeeH9ToYgH-YyZnCI",
      authDomain: "auth-rn-ab.firebaseapp.com",
      databaseURL: "https://auth-rn-ab.firebaseio.com",
      projectId: "auth-rn-ab",
      storageBucket: "",
      messagingSenderId: "217470445419",
      appId: "1:217470445419:web:006d3aef64487ec5"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
