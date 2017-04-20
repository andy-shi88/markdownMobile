import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, View, ScrollView} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Styles from './styles';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ''
    };
  }
  setLink(text) {
    this.setState({
      link: text
    });
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.MDcontainer}>
          <ScrollView style={Styles.MDList}>

          </ScrollView>
        </View>
      <View style={Styles.inputController}>
          <TextInput
            style={Styles.linkInput}
            placeholder="your message here"
            onChangeText={(text) => this.setLink(text)}
            blurOnSubmit={true}
            multiline={false}
            >
          </TextInput>
          <Button
            style={Styles.buttonSend}
            title= "Send"
            // onPress={this.sendLink.bind(this)}
          />
        </View>
      </View>
    );
  }
}
