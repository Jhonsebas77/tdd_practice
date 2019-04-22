/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, TextInput, ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state: any;
  constructor(props) {
    super(props)
    this.state = {
      test: false,
      text: ''
    };
    this.prueba = this.prueba.bind(this);
    this.change = this.change.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  prueba(value) {
    return this.state.test;
  }
  change() {
    this.setState({
      test: !this.state.test
    });
  }
  onChangeText(text) {
    this.setState({ text: text });
  }
  getText() {
    return this.state.text;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID={'Text1'}>Welcome to React Native!</Text>
        <TouchableOpacity testID={'button'} onPress={this.change}>
          <Text style={styles.instructions}>{'PUSH'}</Text>
        </TouchableOpacity  >
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
          onChangeText={this.onChangeText} value={this.state.text} testID={'inputUser'}
        />
        {this.props.list && <ScrollView contentContainerStyle={{ backgroundColor: 'red' }} testID={'scrollUser'}>
          <View style={{ backgroundColor: 'blue', width: 200, height: 200, flexDirection: 'column' }}>
            {this.state.text && this.props.list.filter((value: string) => value.indexOf(this.state.text) >= 0).map((value: string) => <Text key={value}>{value}</Text>)};
          </View>
        </ScrollView>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
