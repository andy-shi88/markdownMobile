import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, View, ScrollView} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Styles from './styles';


export default class ReadMD extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <Text>Readme here</Text>
      </View>
    );
  }
}
