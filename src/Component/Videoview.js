import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  LogBox,
  Dimensions,
  Pressable,
} from 'react-native';
import {Card} from 'react-native-paper';
import 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import Videofullview from './Videofullview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cardview = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Card.Cover
                source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
              />
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
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
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
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
          </Card>
        </View>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={{flex: 1}}>
            <Videofullview />
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closebutton}>
                {/* Closed Video */}
                <Icon name="close-box" size={35} color={'white'} />
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Cardview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginBottom: 60,
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
  video: {
    height: Dimensions.get('window').width * (9 / 16),
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  button: {
    padding: 15,
    elevation: 2,
    marginBottom: 5,
    backgroundColor: '#e4632b',
  },
  closebutton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'right',
  },
});
