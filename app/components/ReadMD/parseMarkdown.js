import React, { Component } from 'react';
import { View } from 'react-native';
import Markdown from 'react-native-markdown';

export default class parseMarkdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'props.link';
    };
  }

  render() {
    return (
      <View>
        <Markdown>
          {
            fetch('https://raw.githubusercontent.com/lwansbrough/react-native-markdown/master/README.md')
            .then((res) => {return res.json()})
            .then((resData) => {
              return resData;
            })
            .catch((error) => {
              console.log(error);
            })
          }
        </Markdown>
      </View>
    );
  }
}
