import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";

import { Card, Button, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: ""})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication failed!!" });
          })
      })
  }

  render() {
    return (
      <Card>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: "red",
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5
  }
}

export default LoginForm;
