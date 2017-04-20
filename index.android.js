import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import  App from './app/components/Main';


export default class markdownMobile extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="App" component={App} title="Main" initial={true} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('markdownMobile', () => markdownMobile);
