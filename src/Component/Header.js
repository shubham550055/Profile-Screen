import React, {Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export class Header extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', margin: 7}}>
        <View style={{flex: 0.1, alignItems: 'center', paddingTop: 4}}>
          {/* <Image
            source={require('../img/arrow.png')}
            style={{height: (width / 100) * 5, width: (width / 100) * 5}}
          /> */}
          <Icon
            name="arrow-left"
            size={24}
            color={'black'}
            // style={{
            //   height: (width / 100) * 4,
            //   width: (width / 100) * 5,
            //   resizeMode: 'contain',
            // }}
          />
        </View>
        <View style={{flex: 0.8, alignItems: 'center'}}>
          <Text style={{fontSize: (width / 85) * 4}}>{'shubham_5500'}</Text>
        </View>
        <View style={{flex: 0.1, alignItems: 'flex-end', paddingTop: 4}}>
          {/* <Image
            source={require('../img/dot.png')}
            style={{
              height: (width / 100) * 4,
              width: (width / 100) * 5,
              resizeMode: 'contain',
            }}></Image> */}
          <Icon
            name="dots-vertical"
            size={22}
            color={'black'}
            // style={{
            //   height: (width / 100) * 4,
            //   width: (width / 100) * 5,
            //   resizeMode: 'contain',
            // }}
          />
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
