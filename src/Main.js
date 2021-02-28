import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Main extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.maincontainer}>
            <ImageBackground
              source={require('./img/s.jpg')}
              style={{height: 230}}
              resizeMode="cover"></ImageBackground>
            <Text style={styles.nametext}>Shubham Baviskar</Text>
            <View style={styles.followcontainer}>
              <View style={{width: '33%', height: 50}}>
                <Text style={styles.follwtext}>Followers</Text>
                <Text style={styles.follwnum}>411</Text>
              </View>
              <View style={{width: '33%', height: 50}}>
                {/* <TouchableOpacity onPress={{}}>
                  <Text style={styles.follwtext}>Chat</Text>
                  <Image
                    style={{
                      width: 35,
                      height: 33,
                      marginLeft: 44,
                    }}
                    source={require('./img/msg.png')}
                  />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={{}}>
                  <Text style={styles.follwtext}>Edit Profile</Text>
                  <Icon
                    name="account-edit"
                    size={35}
                    color={'#e4632b'}
                    style={{marginLeft: 44}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{width: '33%', height: 50}}>
                <Text style={styles.follwtext}>Following</Text>
                <Text style={styles.follwnum}>313</Text>
              </View>
            </View>
            <View style={styles.locationcontainer}>
              <Text style={styles.follwnum}>
                <Icon name="map-marker-radius" size={24} />
                City : Mumbai
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#ffffff',
  },
  nametext: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
    paddingBottom: 20,
  },
  locationcontainer: {
    flexDirection: 'row',
    backgroundColor: '#e7b29b',
    alignItems: 'stretch',
    position: 'relative',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 8,
  },
  follwtext: {
    fontSize: 18,
    textAlign: 'center',
    margin: 7,
  },
  follwnum: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
