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
import Header from './Component/Header';
import Route from './Component/Route';

export class Main extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <Header />
        <ScrollView>
          <View style={styles.maincontainer}>
            <ImageBackground
              source={require('./img/s.jpg')}
              style={{height: 200}}
              resizeMode="cover"></ImageBackground>
            <Text style={styles.nametext}>Shubham Baviskar</Text>
            <View style={styles.followcontainer}>
              <View style={{width: '33%', height: 50}}>
                <Text style={styles.follwtext}>Followers</Text>
                <Text style={styles.follwnum}>411</Text>
              </View>
              <View style={{width: '34%', height: 50}}>
                <TouchableOpacity onPress={{}}>
                  <View style={styles.editprofilecontainer}>
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#ffffff',
                      }}>
                      Edit Profile
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={{}}>
                  <Text style={styles.follwtext}>Edit Profile</Text>
                  <Icon
                    name="account-edit"
                    size={35}
                    color={'#e4632b'}
                    style={{marginLeft: 44}}
                  />
                </TouchableOpacity> */}
              </View>
              <View style={{width: '33%', height: 50}}>
                <Text style={styles.follwtext}>Following</Text>
                <Text style={styles.follwnum}>313</Text>
              </View>
            </View>
            {/* <View style={styles.locationcontainer}>
              <Text style={styles.follwnum}>
                <Icon name="map-marker-radius" size={24} />
                City : Mumbai
              </Text>
            </View> */}
          </View>
          <Route />
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
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
    paddingBottom: 30,
  },
  editprofilecontainer: {
    flexDirection: 'row',
    backgroundColor: '#CC202E',
    alignItems: 'stretch',
    position: 'relative',
    justifyContent: 'center',
    margin: 8,
    marginTop: 14,
    borderRadius: 10,
    padding: 7,
  },
  follwtext: {
    fontSize: 17,
    textAlign: 'center',
    margin: 2,
    color: '#878A8C',
  },
  follwnum: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
