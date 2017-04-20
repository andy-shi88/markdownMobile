import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
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
    //show loading here
    //after retrieving data [move this as callback]
    this.setState({
      isShow: true
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Parse Your MD File</Text>
        </View>
      <ScrollView style={Styles.MDList}>
      {
        this.state.isShow ?
        <Text style={{alignSelf: 'center'}}>Showing github md file list</Text>
        :
        <Text style={{alignSelf: 'center'}}>Insert the git repo link in the input box</Text>
      }
      </ScrollView>
      <View style={Styles.footer}>
          <TouchableOpacity
            style={Styles.addButton}
            title= "Send"
            onPress={this.sendLink.bind(this)}
          >
            <Text style={Styles.addButtonText}>Search</Text>
          </TouchableOpacity>
          <TextInput
            style={Styles.textInput}
            placeholder="Input format is user-name/repo-name"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setLink(text)}
            onSubmitEditing={this.sendLink.bind(this)}
            blurOnSubmit={true}
            multiline={false}
            >
          </TextInput>

        </View>
      </View>
    );
  }
}
