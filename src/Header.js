import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export class Header extends Component {
  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.BackAction onPress={{}} />
          <Appbar.Content style={{alignItems: 'center'}} title="Shubham_5500" />
          <Appbar.Action icon="view-headline" onPress={{}} />
        </Appbar.Header>
      </View>
    );
  }
}

export default Header;
