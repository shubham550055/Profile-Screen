import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Imagefullview from './Imagefullview';

const Stack = createStackNavigator();
export class Cardview extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Cardview"
          options={{headerShown: false}}
          component={Cardview}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Imagefullview"
          component={Imagefullview}
        />
      </Stack.Navigator>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Imagefullview');
              }}>
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            </TouchableOpacity>
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

export default Cardview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    marginBottom: 3,
  },
  cardview: {
    width: '49%',
    height: '100%',
    marginLeft: 2,
  },
});
