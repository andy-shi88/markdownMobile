import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, View, ScrollView} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Styles from './styles';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      isShow: false
    };
  }
//called every text changes
  setLink(text) {
    this.setState({
      link: text
    });
  }
//sendlink is activated after clicking send button or pressing enter after input text
  sendLink() {
    //retrieve data here
    //here
    //end of retrieving data
    this.setState({
      isShow: true
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.MDcontainer}>
          <ScrollView style={Styles.MDList}>
        {
          this.state.isShow ?
          <Text>Showing github md file list</Text>
          :
          <Text>Insert the git repo link in the input box</Text>
        }
          </ScrollView>
        </View>
      <View style={Styles.inputController}>
          <TextInput
            style={Styles.linkInput}
            placeholder="your message here"
            onChangeText={(text) => this.setLink(text)}
            onSubmitEditing={this.sendLink.bind(this)}
            blurOnSubmit={true}
            multiline={false}
            >
          </TextInput>
          <Button
            style={Styles.buttonSend}
            title= "Send"
            onPress={this.sendLink.bind(this)}
          />
        </View>
      </View>
    );
  }
}
