import React from 'react';
import 'react-native-gesture-handler';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cardview from './src/Cardview';
import {ScrollView} from 'react-native-gesture-handler';
import Main from './src/Main';
import Header from './src/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Videoview from './src/Videoview';
import Route from './src/Route';

const Tab = createMaterialTopTabNavigator();
const APP = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Main />
        <Route />
      </ScrollView>
    </View>
  );
};

export default APP;
