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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <Icon name="wechat" size={35} color={'#CC202E'} />
              </View>
            </View>
            <View style={styles.followcontainer}>
              <View style={{width: '33%', height: 75}}>
                <Text style={styles.follwtext}>Followers</Text>
                <Text style={styles.follwnum}>41M</Text>
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
                        fontWeight: 'bold',
                        color: '#ffffff',
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
            <View style={styles.locationcontainer}>
              <Text style={styles.Locationtext}>
                <Icon name="map-marker-radius" size={24} />
                Location : Mumbai
              </Text>
            </View>
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
    textAlign: 'right',
    fontWeight: 'bold',
    width: '72%',
    marginRight: 50,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
  },
  Locationtext: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
  },
  Topcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    margin: 8,
  },
  locationcontainer: {
    alignItems: 'stretch',
    position: 'relative',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 10,
    marginLeft: 22,
  },
  dmcontainer: {
    justifyContent: 'center',
    width: '28%',
  },
  followbutton: {
    backgroundColor: '#CC202E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 85,
    height: 85,
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
