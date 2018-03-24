/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import People from './People';
import Container from './Container';

const links = [
  {title: 'People'},
  {title: 'Films'},
  {title: 'StarShips'},
  {title: 'Vehicles'},
  {title: 'Species'},
  {title: 'Planets'},
];

class StarWars extends React.Component {
  static navigationOptions = {
    headerTitle: <Image
        style={{width: 110, height: 64}}
        source={{
          uri: 'https://raw.githubusercontent.com/dabit3/react-native-in-action/chapter6/sw.jpg',
        }}
    />,
    headerStyle: {backgroundColor: 'black', height: 110},
  };
  navigate = (link) => {
    const {navigate} = this.props.navigation;
    navigate(link);
  };

  renderItem = ({item, index}) => {
    return (
        <TouchableHighlight
            onPress={() => this.navigate(item.title)}
            style={[styles.item, {borderTopWidth: index === 0 ? 1 : null}]}
        >
          <Text style={styles.text}>{item.title}</Text>
        </TouchableHighlight>
    );
  };

  render() {
    return (
        <Container>
          <FlatList
              data={links}
              keyExtractor={(item) => item.title}
              renderItem={this.renderItem}
          />
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31,.2)',
    borderBottomWidth: 1,
  },
  text: {
    color: '#ffe81f',
    fontSize: 18,
  },
});

const Navigation = StackNavigator({
  StarWars: {
    screen: StarWars,
  },
  People: {
    screen: People,
  },
});

export default Navigation;