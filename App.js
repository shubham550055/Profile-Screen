import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Cardview from './src/Cardview';
import Main from './src/Main';

const Stack = createStackNavigator();
export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Cardview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cardview"
            component={Imagefullview}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
