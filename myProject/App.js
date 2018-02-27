/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import getStyleSheet from './styles'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      darkTheme: false,
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme () {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  render () {
    const styles = getStyleSheet(this.state.darkTheme)
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor}
        </View>
      </View>
    )
  }
}

