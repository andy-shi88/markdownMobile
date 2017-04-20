import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>---------- Parse Your MarkDown File ----------</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <Text>null</Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput style={styles.textInput}
            onChangeText={(text)=>this.setLink({text})}
            value={this.state.link}
            placeholder='Write Your github link here'
            placeholderTextColor='white'
            underlineColorAndroid='transparent' ></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd'
  },
  headerText: {
    color:'white',
    fontSize:18,
    padding:26
  },
  scrollContainer:{
    flex:1,
    marginBottom:100
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    right:0,
    left:0,
    bottom:0
  },
  addButton:{
    backgroundColor:"#E91E63",
    height:70,
    width:70,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-35,
    zIndex:10
  },
  addButtonText:{
    color:'#fff',
    fontSize:34
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    paddingTop:46,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
    fontStyle:'italic'
  }
});
