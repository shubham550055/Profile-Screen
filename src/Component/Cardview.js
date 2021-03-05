import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {Card} from 'react-native-paper';
import ImageView from 'react-native-image-view';

const Cardview = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const images = [
    {
      source: {
        uri: 'https://picsum.photos/seed/picsum/200/300',
      },
      // title: 'Paris',
      width: 806,
      height: 750,
    },
  ];
  // state = {Image: 'https://picsum.photos/700'};

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Card.Cover source={require('../img/p4.jpg')} />
            </TouchableOpacity>
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={require('../img/p2.jpg')} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={require('../img/p3.jpg')} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={require('../img/p1.jpeg')} />
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
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View>
              <ImageView
                images={images}
                imageIndex={0}
                onClose={() => setModalVisible(!modalVisible)}
                animationType="fade"
              />
            </View>
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
    // marginBottom: 20,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    marginBottom: 2,
  },
  cardview: {
    width: '49%',
    height: '100%',
    marginLeft: 2,
  },
});
