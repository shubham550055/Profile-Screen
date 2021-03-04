import React from 'react';
// import 'react-native-gesture-handler';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cardview from './Cardview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Videoview from './Videoview';

const Tab = createMaterialTopTabNavigator();
const APP = () => {
  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              color = 'gray';
              if (focused) {
                color = '#e7612c';
              }
              if (route.name == 'Image')
                return <Icon name="photo" size={22} color={color} />;
              if (route.name == 'Video')
                return <Icon name="video-camera" size={26} color={color} />;
              if (route.name == 'Tag')
                return <Icon name="tag" size={26} color={color} />;
              if (route.name == 'Saved')
                return <Icon name="save" size={26} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#e7612c',
            showIcon: true,
            showLabel: false,
            labelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
            style: {
              height: 55,
              elevation: 0,
            },
            indicatorStyle: {
              backgroundColor: '#e7612c',
            },
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Image" component={Cardview} />
          <Tab.Screen name="Video" component={Videoview} />
          <Tab.Screen name="Tag" component={Cardview} />
          <Tab.Screen name="Saved" component={Cardview} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default APP;
