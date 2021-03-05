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
              color = '#b2ada9';
              if (focused) {
                color = '#CC202E';
              }
              if (route.name == 'Image')
                return <Icon name="photo" size={18} color={color} />;
              if (route.name == 'Video')
                return <Icon name="video-camera" size={20} color={color} />;
              if (route.name == 'Tag')
                return <Icon name="tag" size={20} color={color} />;
              if (route.name == 'Saved')
                return <Icon name="save" size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#CC202E',
            showIcon: true,
            showLabel: false,
            labelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
            style: {
              height: 45,
              elevation: 0,
            },
            indicatorStyle: {
              backgroundColor: '#CC202E',
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
