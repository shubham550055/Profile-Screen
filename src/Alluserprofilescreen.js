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
            <View style={styles.Topcontainer}>
              <Text style={styles.nametext}>Shubham Baviskar</Text>
              <View style={styles.dmcontainer}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#2d4e97',
                  }}>
                  D M
                </Text>
              </View>
            </View>
            <View style={styles.followcontainer}>
              <View style={{width: '33%', height: 75}}>
                <Text style={styles.follwtext}>Followers</Text>
                <Text style={styles.follwnum}>411</Text>
              </View>
              <View style={{width: '34%', height: 75, alignItems: 'center'}}>
                <TouchableOpacity onPress={{}}>
                  {/* <Text style={styles.follwtext}>Chat</Text>
                  <Image
                    style={{
                      width: 35,
                      height: 33,
                      marginLeft: 67,
                    }}
                    source={require('./img/msg.png')}
                  /> */}
                  <View style={styles.followbutton}>
                    <Text
                      style={{
                        fontSize: 18,
                        // textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#2d4e97',
                      }}>
                      Follow
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width: '33%', height: 75}}>
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
    width: '70%',
    marginLeft: 30,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
    paddingBottom: 20,
  },
  Topcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
  },
  locationcontainer: {
    backgroundColor: '#ffea28',
    alignItems: 'stretch',
    position: 'relative',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 10,
    padding: 7,
    width: 120,
    marginLeft: 22,
  },
  dmcontainer: {
    backgroundColor: '#ffea28',
    justifyContent: 'center',
    margin: 1,
    padding: 4,
    width: '20%',
  },
  followbutton: {
    backgroundColor: '#ffea28',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 88,
    height: 88,
  },
  follwtext: {
    fontSize: 17,
    textAlign: 'center',
    margin: 2,
    color: '#878A8C',
    marginTop: 20,
  },
  follwnum: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
