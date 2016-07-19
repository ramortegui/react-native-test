/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

var test = 'asdf';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MyTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! jejeje
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js.fff
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyTest', () => MyTest);
